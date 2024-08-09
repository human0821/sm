import type { ModalDialogTypes } from "./consts/ModalDialogTypes";
import type { ButtonLoadingComponent } from "@/shared/ui/Button/Loading/types";

declare namespace ModalEntity {
  export interface Dialog {
    title: string;
    type: ModalDialogTypes;
    buttons?: ButtonLoadingComponent[];
    children?: React.ReactNode;
  }
  export interface Common {
    title?: string;
    description?: string;
    children?: React.ReactNode;
    width?: number;
  }
}
