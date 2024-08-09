import type { FetchBaseQueryError } from "@reduxjs/toolkit/query";

import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { casesApi } from "@/app/api/apiGenerator/common";
import Routes from "@/app/routes/consts/routes";
import { Variants } from "@/shared/consts/variants";
import { useRTKAlert } from "@/shared/hooks/useRTKAlert";

export const useCaseManagmentForm = ({ id }: { id: string }) => {
  const form = useForm();
  const [fetchChangePriveleges, fetchChangePrivelegesState] = casesApi.usePutPrivelegesMutation();
  const alert = useRTKAlert();
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const [showSuccess, setShowSuccess] = useState(false);

  const submit = (data: any) => {
    const priveleges: any = {};
    let index = 1;
    for (const key in data) {
      if (data[key].length > 0) {
        priveleges[`${index}`] = data[key];
        index++;
      }
    }

    fetchChangePriveleges({ caseSegmentPrivileges: { privileges: JSON.stringify(priveleges) }, caseId: id }).then(
      alert("Сотрудник успешно изменени", (error) =>
        typeof error?.data?.detail === "string"
          ? error.data?.detail
          : error.data?.detail[0].msg || "При выполнении запроса что-то пошло не так",
      ),
    );
  };

  useEffect(() => {
    if (fetchChangePrivelegesState.error) {
      const error = fetchChangePrivelegesState.error as FetchBaseQueryError;
      enqueueSnackbar(
        // @ts-ignore
        typeof error.data?.detail === "string" // @ts-ignore
          ? error.data?.detail // @ts-ignore
          : error.data?.detail[0].msg || "При выполнении запроса что-то пошло не так",
        {
          variant: Variants.ERROR,
        },
      );
    }
  }, [fetchChangePrivelegesState.error]);

  useEffect(() => {
    if (fetchChangePrivelegesState.data) {
      setShowSuccess(true);
    }
  }, [fetchChangePrivelegesState.data]);

  const hideSuccess = () => {
    setShowSuccess(false);
    navigate(Routes.SYSTEM_CASES_PAGE);
  };

  return {
    form,
    submit,
    isLoading: fetchChangePrivelegesState.isLoading,
    showSuccess,
    hideSuccess,
  };
};
