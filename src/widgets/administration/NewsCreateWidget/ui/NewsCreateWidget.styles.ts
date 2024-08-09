import { Card, styled } from "@mui/material";

import { mediaQueryHelp } from "@/app/styles/functions";

export const NewsCreateCardWrap = styled(Card)`
  width: 908px;
  flex-grow: 1;
  max-width: 100%;
  overflow: visible !important;
  ${mediaQueryHelp({ padding: { xs: "20px", s: "40px" } })};
`;
