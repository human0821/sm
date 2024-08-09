import { Button } from "@mui/material";

import { DeleteIcon } from "@/assets/icons";

import { useFaqDeleteButton } from "../hooks/useFaqDeleteButton";

export const FaqDeleteButton = ({ id }: { id: FacItem["id"] }) => {
  const { deleteHandle } = useFaqDeleteButton({
    id,
  });

  return (
    <Button
      startIcon={<DeleteIcon style={{ width: 24, height: 24, marginRight: 2 }} />}
      sx={{ padding: "5px 20px !important" }}
      color="error"
      size="large"
      onClick={deleteHandle}>
      Удалить
    </Button>
  );
};
