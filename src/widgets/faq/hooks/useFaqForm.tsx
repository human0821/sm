import type { ModalEntity } from "@/entities/modal/types";
import type { FetchBaseQueryError } from "@reduxjs/toolkit/query";

import { useSnackbar } from "notistack";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { employeesApi } from "@/app/api/apiGenerator/common";
import Routes from "@/app/routes/consts/routes";
import { setModal } from "@/app/store/app/slice";
import { ModalDialogEntity, ModalDialogTypes } from "@/entities/modal";
import { Variants } from "@/shared/consts/variants";
import { useRTKAlert } from "@/shared/hooks/useRTKAlert";
import { createFormData } from "@/shared/utils/createFormData";

export const useFaqForm = ({ id }: { id?: string }) => {
  const form = useForm<Omit<EmployeeProfileInfoForm, "id">>();
  const [fetchCreateEmployee, fetchCreateEmployeeState] = employeesApi.useCreateEmployeeMutation();
  const [fetchChangeEmployee] = employeesApi.usePutEmployeeMutation();
  const alert = useRTKAlert();
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const modalSuccessProps: ModalEntity.Dialog = {
    title: "Сотрудник создан!",
    type: ModalDialogTypes.SUCCESS,
    buttons: [
      {
        children: "Закрыть",
        type: "button",
        variant: "contained",
        onClick: () => {
          dispatch(setModal({ show: false }));
          navigate(Routes.ACCOUNT_EMPLOYEES_PAGE);
        },
      },
    ],
  };

  const submit = (data: any) => {
    const employee = { ...data };

    if (id) {
      delete employee.email;
      delete employee.password;

      fetchChangeEmployee({ ApiV1EmployeesEmployeeIdPut: createFormData(employee), employeeId: id }).then(
        alert("Сотрудник успешно изменени", (error) =>
          typeof error?.data?.detail === "string"
            ? error.data?.detail
            : error.data?.detail[0].msg || "При выполнении запроса что-то пошло не так",
        ),
      );
    } else {
      fetchCreateEmployee({ ApiV1EmployeesPost: createFormData(employee) });
    }
  };

  useEffect(() => {
    if (fetchCreateEmployeeState.error) {
      const error = fetchCreateEmployeeState.error as FetchBaseQueryError;
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
  }, [fetchCreateEmployeeState.error]);

  useEffect(() => {
    if (fetchCreateEmployeeState.data) {
      dispatch(
        setModal({
          show: true,
          component: <ModalDialogEntity {...modalSuccessProps} />,
        }),
      );
    }
  }, [fetchCreateEmployeeState.data]);

  return {
    form,
    submit,
    isLoading: fetchCreateEmployeeState.isLoading,
  };
};
