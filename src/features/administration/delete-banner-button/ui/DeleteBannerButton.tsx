import type { BannerSchema } from "@/app/api/apiGenerator/admin/bannersAdminApi";
import type { FetchBaseQueryError } from "@reduxjs/toolkit/query";

import { Button } from "@mui/material";
import { useSnackbar } from "notistack";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { bannersAdminApi } from "@/app/api/apiGenerator/admin";
import Routes from "@/app/routes/consts/routes";
import { TrashIcon } from "@/assets/icons";
import { ModalDialogTypes } from "@/entities/modal";
import { Variants } from "@/shared/consts/variants";
import { ButtonIcon } from "@/shared/ui/Button";
import CustomDialog from "@/shared/ui/DialogBox/DialogBox";

export const DeleteBannerButton = ({ id, icon }: { id: BannerSchema["id"]; icon?: boolean }) => {
  const [deleteBanner, deleteBannerState] = bannersAdminApi.useDeleteBannerAdminMutation();
  const [deleteId, setDeleteId] = useState<number>(0);
  const navigate = useNavigate();
  const [showSuccess, setShowSuccess] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    if (deleteBannerState.isSuccess) {
      setDeleteId(0);
      if (icon) {
        enqueueSnackbar("Запись успешно удалена", {
          variant: Variants.SUCCESS,
        });
      } else {
        setTimeout(() => setShowSuccess(true), 100);
      }
    }
  }, [deleteBannerState.isSuccess]);

  useEffect(() => {
    if (deleteBannerState.error) {
      const error = deleteBannerState.error as FetchBaseQueryError;
      enqueueSnackbar(
        // @ts-ignore
        typeof error.data?.detail === "string" // @ts-ignore
          ? error.data?.detail // @ts-ignore
          : error.data?.detail[0].msg || "Не удалось удалить запись",
        {
          variant: Variants.ERROR,
        },
      );
    }
  }, [deleteBannerState.error]);

  const deleteHandle = () => {
    deleteBanner({ bannerId: id });
  };

  const hideSuccess = () => {
    setShowSuccess(false);
    navigate(Routes.SYSTEM_BANNERS_PAGE);
  };

  return (
    <>
      {icon ? (
        <ButtonIcon onClick={() => setDeleteId(id)}>
          <TrashIcon />
        </ButtonIcon>
      ) : (
        <Button variant="outlined" color="error" sx={{ width: "100%" }} onClick={() => setDeleteId(id)}>
          Удалить баннер
        </Button>
      )}
      {!!deleteId && (
        <CustomDialog
          type={ModalDialogTypes.DELETE}
          open={!!deleteId}
          isLoading={deleteBannerState.isLoading}
          onClose={() => setDeleteId(0)}
          onNotConfirm={() => setDeleteId(0)}
          onConfirm={() => deleteId && deleteHandle()}>
          Вы действительно хотите удалить баннер?
        </CustomDialog>
      )}

      <CustomDialog
        type={ModalDialogTypes.SUCCESS}
        open={showSuccess}
        actions={
          <Button onClick={hideSuccess} sx={{ flexGrow: 1 }} variant="contained">
            Закрыть
          </Button>
        }>
        Баннер удален
      </CustomDialog>
    </>
  );
};
