import type { ModalEntity } from "@/entities/modal/types";
import type { FetchBaseQueryError } from "@reduxjs/toolkit/query";

import { useSnackbar } from "notistack";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { employeesApi } from "@/app/api/apiGenerator/common";
import Routes from "@/app/routes/consts/routes";
import { setModal } from "@/app/store/app/slice";
import { ModalDialogEntity, ModalDialogTypes } from "@/entities/modal";
import { Roles } from "@/shared/consts/roles";
import { Variants } from "@/shared/consts/variants";
import { useRTKAlert } from "@/shared/hooks/useRTKAlert";
import { createFormData } from "@/shared/utils/createFormData";

export const useEmployeeProfileInfo = ({ id }: { id?: string }) => {
  const form = useForm<Omit<EmployeeProfileInfoForm, "id">>();
  const [currentImage, setCurrentImage] = useState<{ link: string; file: File | null }>({ link: "", file: null });
  const [fetchCreateEmployee, fetchCreateEmployeeState] = employeesApi.useCreateEmployeeMutation();
  const [fetchChangeEmployee] = employeesApi.usePutEmployeeMutation();
  const alert = useRTKAlert();
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isDisablePriceSwitch, setIsDisablePriceSwitch] = useState<boolean>();
  const selectedRoles = form.watch("roles");

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

  const changeImage: MediaUploader["onChange"] = (file, resolve) => {
    if (file) {
      const linkBlob = URL.createObjectURL(file);
      setCurrentImage({ link: linkBlob, file });
      resolve(linkBlob);
    } else {
      setCurrentImage({ link: "", file: null });
      resolve("");
    }
  };

  const submit = (data: any) => {
    const employee = { ...data };

    if (currentImage.file) {
      employee.avatar = currentImage.file;
    }

    if (data.caseSegmentId) {
      employee.caseSegmentId = data.caseSegmentId;
    }

    if (data.priceFlag === undefined) {
      if (isDisablePriceSwitch) {
        delete employee.priceFlag;
      } else {
        employee.priceFlag = false;
      }
    }

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

  useEffect(() => {
    setIsDisablePriceSwitch(
      selectedRoles //@ts-ignore
        ? (selectedRoles as string[]).filter(
            (item) =>
              item === `${Roles.PARTNER}` || item === `${Roles.PARTNER_ACCOUNTANT}` || item === `${Roles.PARTNER_ADMIN}`,
          ).length > 0
        : undefined,
    );
    if (selectedRoles?.length > 0) {
      form.clearErrors("roles");
    }
  }, [selectedRoles]);

  return {
    form,
    submit,
    isLoading: fetchCreateEmployeeState.isLoading,
    changeImage,
    currentImage,
    setCurrentImage,
    isDisablePriceSwitch,
    selectedRoles,
  };
};
