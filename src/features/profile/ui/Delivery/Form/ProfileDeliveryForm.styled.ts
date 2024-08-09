import { TextField, styled } from "@mui/material";

export const FormWrapper = styled("form")`
  display: flex;
  flex-direction: column;
  row-gap: 40px;
  padding-top: 20px;
`;

export const FormTextField = styled(TextField)`
  input {
    text-overflow: ellipsis;
  }
`;
