import { styled } from "@mui/material";

import { mediaQueryHelp } from "@/app/styles/functions";

export const InfoForm = styled("form")`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  margin: 0 auto;

  ${mediaQueryHelp({ width: { l: 908 }, gap: { l: 40 } })}
`;

export const InfoFormContent = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const FieldsWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  row-gap: 48px;
  margin-top: 24px;
`;
