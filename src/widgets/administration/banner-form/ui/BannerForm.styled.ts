import { styled, Card, FormControlLabel, Typography } from "@mui/material";

import { Functions } from "@/app/styles";

export const CreateWrap = styled("div")`
  width: 100%;
  max-width: 100%;
  margin: 0 auto;

  ${Functions.mediaQueryHelp({ width: { l: "752px", xxl: "908px" } })}

  svg {
    cursor: pointer;
  }
`;

export const CreateCardWrap = styled(Card)`
  width: 100%;
  flex-grow: 1;
`;

export const Title = styled(Typography)`
  margin-bottom: 32px;
  ${Functions.mediaQueryHelp({ marginBottom: { m: "48px" } })}
`;

export const SwitchWrapper = styled(FormControlLabel)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-left: 0;
`;

export const ButtonsWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;

  ${Functions.mediaQueryHelp({ flexDirection: { m: "row" } })}
`;

export const FieldsWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  margin-top: 20px;
`;
