import type { CustomDialog as CustomDialogProps } from "./types";

import { Box, Button, Modal, Stack, Typography } from "@mui/material";

import { ModalCheckIcon, ModalCrossIcon, ModalQuestionIcon, ModalWarningIcon } from "@/assets/icons/dialog";
import { ModalDialogTypes } from "@/entities/modal";

import { CustomDialogContent, CustomDialogIcon, CustomDialogTitle, CustomDialogWindow } from "./CustomDialog.styles";
import { ButtonLoading } from "../Button/Loading/ButtonLoading";

const iconsByType = {
  [ModalDialogTypes.QUESTION]: <ModalQuestionIcon />,
  [ModalDialogTypes.SUCCESS]: <ModalCheckIcon />,
  [ModalDialogTypes.DELETE]: <ModalCrossIcon />,
  [ModalDialogTypes.WARNING]: <ModalWarningIcon />,
};

const CustomDialog = (props: CustomDialogProps) => {
  const {
    title,
    children,
    actions,
    open,
    onNotConfirm,
    onClose,
    noButtonText = "Нет",
    yesButtonText = "Да",
    onConfirm,
    isLoading = false,
  } = props;

  return (
    <Modal open={open} onClose={onClose}>
      <CustomDialogWindow>
        <CustomDialogContent>
          {!!title && title}
          {props.type && <CustomDialogIcon>{iconsByType[props.type]}</CustomDialogIcon>}
          <CustomDialogTitle textAlign={"center"} variant="h3">
            {children}
          </CustomDialogTitle>
          {actions || (
            <>
              <Stack direction={"row"} gap={2} width={"100%"}>
                <Button onClick={onNotConfirm} sx={{ flexGrow: 1, width: "50%" }} disabled={isLoading} variant="contained">
                  {noButtonText}
                </Button>
                <ButtonLoading
                  loading={isLoading}
                  onClick={onConfirm}
                  disabled={isLoading}
                  sx={{ flexGrow: 1, width: "50%" }}
                  variant="outlined">
                  {yesButtonText}
                </ButtonLoading>
              </Stack>
            </>
          )}
        </CustomDialogContent>
      </CustomDialogWindow>
    </Modal>
  );
};

export default CustomDialog;
