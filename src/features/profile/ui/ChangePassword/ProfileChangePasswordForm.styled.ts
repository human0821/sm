import { styled } from "@mui/material";

import { ButtonLoading } from "@/shared/ui/Button/Loading/ButtonLoading";

export const FormWrapper = styled("form")`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const FormSubmit = styled(ButtonLoading)`
  margin-top: 46px;
  justify-content: space-between;
`;
