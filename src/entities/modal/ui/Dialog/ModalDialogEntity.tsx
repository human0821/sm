import type { ModalEntity } from "../../types";

import { Button, Typography } from "@mui/material";
import { useMemo } from "react";

import { ModalCheckIcon, ModalCrossIcon, ModalQuestionIcon } from "@/assets/icons/dialog";

import { DialogFooter, DialogIcon, DialogWrapper } from "./ModalDialogEntity.styled";
import { ModalDialogTypes } from "../../consts/ModalDialogTypes";

export function ModalDialogEntity(props: ModalEntity.Dialog) {
  const Icon = useMemo(() => {
    switch (props.type) {
      case ModalDialogTypes.QUESTION:
        return ModalQuestionIcon;
      case ModalDialogTypes.SUCCESS:
        return ModalCheckIcon;
      case ModalDialogTypes.DELETE:
        return ModalCrossIcon;
      default:
        return undefined;
    }
  }, [props.type]);

  return (
    <DialogWrapper>
      {Icon && (
        <DialogIcon>
          <Icon />
        </DialogIcon>
      )}
      {props.title && (
        <Typography variant="h3" whiteSpace="pre-line">
          {props.title}
        </Typography>
      )}
      {props.children ? (
        <DialogFooter>{props.children}</DialogFooter>
      ) : (
        props.buttons?.length && (
          <DialogFooter>
            {props.buttons.map((buttonProps, index) => (
              <Button size="large" key={index} {...buttonProps} />
            ))}
          </DialogFooter>
        )
      )}
    </DialogWrapper>
  );
}
