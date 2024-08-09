import { Button } from "@mui/material";
import { useEffect, useState } from "react";

import { ModalDialogTypes } from "@/entities/modal";
import CustomDialog from "@/shared/ui/DialogBox/DialogBox";

export const ReadAllButton = () => {
  const [showMessage, setShowMessage] = useState(false);

  const readHandle = () => {
    setShowMessage(false);
  };
  return (
    <>
      <Button variant="contained" size="large" fullWidth onClick={() => setShowMessage(true)}>
        Прочитать все
      </Button>
      <CustomDialog
        type={ModalDialogTypes.DELETE}
        open={showMessage}
        // isLoading={deleteBannerState.isLoading}
        onClose={() => setShowMessage(false)}
        onNotConfirm={() => setShowMessage(false)}
        onConfirm={readHandle}>
        Вы действительно хотите пометить все, как прочитанные?
      </CustomDialog>
    </>
  );
};
