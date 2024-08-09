import type { CaseSegmentListSchema } from "@/app/api/apiGenerator/common/casesApi";
import type { FetchBaseQueryError } from "@reduxjs/toolkit/query";

import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useErrorBoundary } from "react-error-boundary";
import { useNavigate } from "react-router-dom";

import { casesApi } from "@/app/api/apiGenerator/common";
import Routes from "@/app/routes/consts/routes";
import { EditIcon } from "@/assets/icons";
import { CaseCard } from "@/entities/cases/card";

import { CasesWrapper, CaseItem } from "./CasesManagement.styled";

export const CasesManagementPage = () => {
  const getCases = casesApi.useGetCasesQuery();
  const [data, setData] = useState<CaseSegmentListSchema[]>();
  const { showBoundary } = useErrorBoundary();
  const navigate = useNavigate();

  useEffect(() => {
    if (getCases.data) {
      setData(getCases.data);
    }
  }, [getCases.data]);

  useEffect(() => {
    if (getCases.error) {
      showBoundary({ code: (getCases.error as FetchBaseQueryError).status || 500 });
    }
  }, [getCases.error]);

  return (
    <CasesWrapper>
      {data?.map(({ id, ...other }) => (
        <CaseItem key={id}>
          <CaseCard id={id} {...other} />
          <Button
            variant="outlined"
            sx={{ justifyContent: "space-between" }}
            endIcon={<EditIcon style={{ width: 24, height: 24, marginRight: 2 }} />}
            onClick={() => navigate(`${Routes.SYSTEM_CASES_PAGE}/${id}`)}>
            Редактировать
          </Button>
        </CaseItem>
      ))}
    </CasesWrapper>
  );
};
