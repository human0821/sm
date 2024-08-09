import type { ModalEntity } from "../../types";

import { Typography } from "@mui/material";

import { CloseIcon } from "@/assets/icons";
import { useModal } from "@/shared/hooks/useModal";

import { CommonClose, CommonContent, CommonDescription, CommonHeader, CommonWrapper } from "./ModalCommonEntity.styled";

export function ModalCommonEntity(props: ModalEntity.Common) {
  const { closeModal } = useModal();

  return (
    <CommonWrapper>
      <CommonHeader>
        <Typography variant="h1">{props.title}</Typography>
        <CommonClose onClick={closeModal}>
          <CloseIcon />
        </CommonClose>
      </CommonHeader>
      {props.description && <CommonDescription>{props.description}</CommonDescription>}
      {props.children && <CommonContent>{props.children}</CommonContent>}
    </CommonWrapper>
  );
}
