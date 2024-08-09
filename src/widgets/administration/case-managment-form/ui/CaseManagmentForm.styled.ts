import { styled } from "@mui/material";

import { mediaQueryHelp } from "@/app/styles/functions";
import { ButtonIcon } from "@/shared/ui/Button";

export const CaseForm = styled("form")`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  margin: 0 auto;

  ${mediaQueryHelp({ width: { l: 908 }, gap: { l: 40 } })}
`;

export const CaseFormContent = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const FieldsWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  ${mediaQueryHelp({ marginTop: { xl: 24 } })}
`;

export const FieldWrapper = styled("div")`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;

  .MuiOutlinedInput-root {
    padding-right: 45px;
  }
`;

export const IconButton = styled(ButtonIcon)`
  position: absolute;
  right: 10px;
`;

export const PrivilegesEmpty = styled("div")`
  ${mediaQueryHelp({ fontSize: { xs: "0.875rem", s: "1.125rem" } })}
  color: ${({ theme }) => theme.palette.secondary.main};
  text-align: center;
  width: 100%;
  padding-bottom: 20px;
`;
