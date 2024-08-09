import type { Status } from "./types";

import { useMemo } from "react";

import { SuccessOutlinedIcon } from "@/assets/icons";
import { ModalCrossIcon } from "@/assets/icons/dialog";

import { StatusesList } from "./consts";
import { StatusWrapper } from "./Status.styled";

export function Status({ status, title, className }: Status.Component) {
  const Icon = useMemo(() => {
    switch (status) {
      case StatusesList.SUCCESS:
        return SuccessOutlinedIcon;
      case StatusesList.ERROR:
        return ModalCrossIcon;
      default:
        return undefined;
    }
  }, [status]);

  return (
    <StatusWrapper className={className} status={status}>
      {Icon && <Icon />}
      {title && <span>{title}</span>}
    </StatusWrapper>
  );
}
