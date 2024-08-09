import { useEffect, useState } from "react";

import { CloseIcon } from "@/assets/icons";
import { ModalDialogTypes } from "@/entities/modal";
import { ButtonIcon } from "@/shared/ui/Button";
import CustomDialog from "@/shared/ui/DialogBox/DialogBox";

export const DeleteNoticeButton = ({ id }: { id: number }) => {
  const [showMessage, setShowMessage] = useState(false);

  const deleteHandle = () => {
    setShowMessage(false);
  };
  return (
    <>
      <ButtonIcon fullColor className="notification-delete" onClick={() => setShowMessage(true)}>
        <CloseIcon />
      </ButtonIcon>
      <CustomDialog
        type={ModalDialogTypes.DELETE}
        open={showMessage}
        // isLoading={deleteBannerState.isLoading}
        onClose={() => setShowMessage(false)}
        onNotConfirm={() => setShowMessage(false)}
        onConfirm={deleteHandle}>
        Вы действительно хотите удалить уведомление?
      </CustomDialog>
    </>
  );
};
