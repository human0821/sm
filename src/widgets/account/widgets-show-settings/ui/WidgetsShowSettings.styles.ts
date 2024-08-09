import { Typography, styled } from "@mui/material";

import { Fonts } from "@/app/styles";
import { mediaQueryHelp } from "@/app/styles/functions";

export const WrapFieldWidgetsShowSettings = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;

  ${mediaQueryHelp({ flexWrap: { s: "nowrap" } })}
`;

export const WidgetSettingsLabel = styled(Typography)`
  ${mediaQueryHelp({ fontSize: ["0.875rem", "1.125rem"] })}
  font-family: ${Fonts.ROCK_STAR_SEMIBOLD};
`;
