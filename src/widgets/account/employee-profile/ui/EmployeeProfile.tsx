import { Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import { useChangePropsEmployeeMutation } from "@/app/api/employees/api";
import Routes from "@/app/routes/consts/routes";
import { ChangePasswordForm } from "@/entities/auth/form";
import { BlockCardEntity } from "@/entities/block";
import { ActivationButton } from "@/features/account";
import { CounterpartyPageWrapper, TitleBlock } from "@/pages/account/ui/counterparty/CounterpartyPage.styled";
import { ACCOUNT_ADMINISTRATION } from "@/shared/consts/content";
import { motionFade } from "@/shared/consts/motion";
import { Breadcrumbs, BreadcrumbsLink } from "@/shared/ui/Breadcrumbs";
import { Loader } from "@/shared/ui/Button/Loading/ButtonLoading.styled";
import { EmployeeProfileInfo } from "@/widgets/account";

import { Grid, BlockWrapper, LoaderWrapper, BreadcrumbsWrapper } from "./EmployeeProfile.styled";
import { useEmployeeChangePassword } from "../hooks/useEmployeeChangePassword";

export const EmployeeProfile = ({ isDetail, data, isLoading }: EmployeeProfile) => {
  const [error, setError] = useState<ChangePasswordForm["error"]>();
  const { onSubmit, isFetching, isSuccess } = useEmployeeChangePassword({ setError, id: data?.id });
  const breadcrumbs = [
    <BreadcrumbsLink underline="hover" key="2" href={Routes.ACCOUNT_EMPLOYEES_PAGE}>
      {ACCOUNT_ADMINISTRATION}
    </BreadcrumbsLink>,
    "Сотрудник",
  ];
  const [currentIsActive, setCurrentIsActive] = useState(!data?.deleted);

  useEffect(() => {
    if (!data?.deleted !== currentIsActive) {
      setCurrentIsActive(!data?.deleted);
    }
  }, [data?.deleted]);

  return (
    <motion.div {...motionFade}>
      <CounterpartyPageWrapper>
        <BreadcrumbsWrapper>
          <Breadcrumbs items={breadcrumbs} />
        </BreadcrumbsWrapper>
        <TitleBlock>
          <Typography variant="h1" component="h2">
            {isDetail ? "Профиль сотрудника" : "Создание сотрудника"}
          </Typography>
          {data && (
            <ActivationButton
              isActive={!data?.deleted}
              id={data.id}
              name="сотрудник"
              mutationHook={useChangePropsEmployeeMutation}
              size="small"
              activateBodyField="deleted"
              withResultModal
              setIsActive={setCurrentIsActive}
              withTag
            />
          )}
        </TitleBlock>
        <Grid>
          <BlockWrapper>
            <BlockCardEntity>
              {isLoading ? (
                <motion.div {...motionFade} key="loader">
                  <LoaderWrapper>
                    <Loader />
                  </LoaderWrapper>
                </motion.div>
              ) : (
                <motion.div {...motionFade} key="content">
                  <EmployeeProfileInfo data={data} isDisabled={!currentIsActive} />
                </motion.div>
              )}
            </BlockCardEntity>
          </BlockWrapper>
          <BlockWrapper>
            {isDetail && (
              <BlockCardEntity>
                <ChangePasswordForm
                  onSubmit={onSubmit}
                  isLoading={isFetching}
                  isSuccess={isSuccess}
                  error={error}
                  align="left"
                  sx={{ gap: "27px", marginTop: "10px" }}
                  disbledFields={!currentIsActive}
                />
              </BlockCardEntity>
            )}
          </BlockWrapper>
          <BlockWrapper />
        </Grid>
      </CounterpartyPageWrapper>
    </motion.div>
  );
};
