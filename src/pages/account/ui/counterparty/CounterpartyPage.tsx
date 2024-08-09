import type { FetchBaseQueryError } from "@reduxjs/toolkit/query";

import { Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { useErrorBoundary } from "react-error-boundary";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";

import { useGetCounterpartyQuery, useChangeActiveCounterpartyMutation } from "@/app/api/counterparties/api";
import Routes from "@/app/routes/consts/routes";
import { CounterpartyInfo } from "@/entities/counterparties/info";
import { ActivationButton, CounterpartyAccountsList } from "@/features/account";
import { COUNTERPARTIES } from "@/shared/consts/content";
import { motionFade } from "@/shared/consts/motion";
import { Breadcrumbs, BreadcrumbsLink } from "@/shared/ui/Breadcrumbs";
import { Loader } from "@/shared/ui/Button/Loading/ButtonLoading.styled";
import { CounterpartiesOrdersList } from "@/widgets/account";

import {
  CounterpartyPageWrapper,
  LoaderWrapper,
  CounterpartyTitleBlock,
  CounterpartyPageLayout,
  CounterpartyPageLeftBlock,
  CounterpartyInfoWrapper,
  CounterpartyName,
  BreadcrumbsWrapper,
  CounterpartyTitleBlockWrapper,
} from "./CounterpartyPage.styled";

export function CounterpartyPage() {
  const [counterparty, setCountetparty] = useState<null | CounterpartiesApi.CounterpartyDetail>(null);
  const { id } = useParams();
  const getCounterparty = useGetCounterpartyQuery(String(id), { refetchOnMountOrArgChange: true });
  const { showBoundary } = useErrorBoundary();

  const breadcrumbs = useMemo(() => {
    return [
      <BreadcrumbsLink underline="hover" key="2" href={Routes.ACCOUNT_COUNTERPARTIES_PAGE}>
        {COUNTERPARTIES}
      </BreadcrumbsLink>,
      `${getCounterparty.data?.name}`,
    ];
  }, [getCounterparty.data]);

  useEffect(() => {
    if (getCounterparty.isSuccess) {
      setCountetparty(getCounterparty.data);
    }
    if (getCounterparty.error) {
      showBoundary({ code: (getCounterparty.error as FetchBaseQueryError).status || 500 });
    }
  }, [getCounterparty]);

  return (
    <>
      <Helmet>Контрагент</Helmet>
      <motion.div {...motionFade}>
        <CounterpartyPageWrapper>
          {getCounterparty.isFetching ? (
            <motion.div {...motionFade} key="1">
              <LoaderWrapper>
                <Loader />
              </LoaderWrapper>
            </motion.div>
          ) : (
            <>
              {counterparty && (
                <>
                  <BreadcrumbsWrapper>
                    <Breadcrumbs items={breadcrumbs} />
                  </BreadcrumbsWrapper>
                  <CounterpartyTitleBlock>
                    <CounterpartyTitleBlockWrapper>
                      <Typography variant="h1" component="h2">
                        Контрагент
                      </Typography>
                      {counterparty.partners.map((item) => (
                        <CounterpartyName key={item.id}>
                          <span>{item.companyName || item.fullName}</span>
                        </CounterpartyName>
                      ))}
                    </CounterpartyTitleBlockWrapper>
                    <ActivationButton
                      isActive={counterparty?.isActive}
                      id={counterparty.id}
                      name="контрагент"
                      mutationHook={useChangeActiveCounterpartyMutation}
                      size="small"
                      withResultModal
                      forDeactivation={counterparty?.forDeactivation}
                    />
                  </CounterpartyTitleBlock>
                  <CounterpartyPageLayout>
                    <CounterpartyPageLeftBlock>
                      <CounterpartyInfoWrapper>
                        <CounterpartyInfo
                          name={counterparty.name}
                          email={counterparty.email}
                          companyAddress={counterparty.companyAddress}
                          phone={counterparty.phone}
                          inn={counterparty.inn}
                          kpp={counterparty.kpp}
                        />
                      </CounterpartyInfoWrapper>
                      <CounterpartyAccountsList list={counterparty.accounts} counterpartyId={counterparty.id} />
                    </CounterpartyPageLeftBlock>
                    <CounterpartiesOrdersList />
                  </CounterpartyPageLayout>
                </>
              )}
            </>
          )}
        </CounterpartyPageWrapper>
      </motion.div>
    </>
  );
}
