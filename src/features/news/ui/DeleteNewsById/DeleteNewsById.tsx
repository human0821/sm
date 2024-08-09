import type { ReactNode } from "react";

import { useState } from "react";

import { newsAdminApi } from "@/app/api/apiGenerator/admin";
import { Colors } from "@/app/styles";
import { DeleteIcon } from "@/assets/icons";
import { ModalDialogTypes } from "@/entities/modal";
import { useRTKAlert } from "@/shared/hooks/useRTKAlert";
import CustomDialog from "@/shared/ui/DialogBox/DialogBox";

//** Полностью самостоятельная иконка удалении новостей из админки */
export function DeleteNewsById({
  newsId,
  children,
  onChange,
}: {
  newsId: number;
  children?: ReactNode;
  onChange?: () => void;
}) {
  const [fetchDeleteNews, { isLoading }] = newsAdminApi.useDeleteNewsAdminMutation(),
    [deleteNewsId, setDeleteNewsId] = useState<number>(0),
    alert = useRTKAlert();

  return (
    <>
      <span onClick={() => setDeleteNewsId(newsId)}>
        {children ? children : <DeleteIcon style={{ color: Colors.GREY_MAIN }} />}
      </span>

      {!!deleteNewsId && (
        <CustomDialog
          type={ModalDialogTypes.DELETE}
          open={!!deleteNewsId}
          isLoading={isLoading}
          onClose={() => {
            setDeleteNewsId(0);
            onChange?.();
          }}
          onNotConfirm={() => {
            setDeleteNewsId(0);
            onChange?.();
          }}
          onConfirm={() =>
            deleteNewsId &&
            fetchDeleteNews({ newsId: deleteNewsId }).then((x) => {
              setDeleteNewsId(0);
              alert("Запись успешно удалена", "Не удалось удалить запись")(x);
              onChange?.();
            })
          }>
          Вы действительно хотите удалить запись?
        </CustomDialog>
      )}
    </>
  );
}
