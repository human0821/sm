import type { ModalDialogTypes } from "@/entities/modal";

interface CustomDialog {
  title?: string;
  children: React.ReactNode;
  actions?: React.ReactNode;
  open: boolean;
  onClose?: () => void;
  yesButtonText?: string;
  noButtonText?: string;
  type?: ModalDialogTypes;
  onConfirm?: () => void;
  onNotConfirm?: () => void;
  isLoading?: boolean;
}
