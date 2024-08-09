import { styled, FormControlLabel } from "@mui/material";

export const InfoForm = styled("form")`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
`;

export const InfoAvatarUploader = styled("div")`
  height: 250px;
`;

export const FieldsWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  row-gap: 48px;
  margin-top: 24px;
`;

export const SwitchsWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  row-gap: 14px;
`;

export const SwitchWrapper = styled(FormControlLabel)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-left: 0;
`;
