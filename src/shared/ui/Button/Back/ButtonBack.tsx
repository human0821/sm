import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { ArrowBackIcon } from "@/assets/icons";

export function ButtonBack() {
  const navigate = useNavigate();

  return (
    <IconButton color="primary" onClick={() => navigate(-1)}>
      <ArrowBackIcon />
    </IconButton>
  );
}
