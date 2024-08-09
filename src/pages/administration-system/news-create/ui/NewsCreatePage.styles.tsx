import { Card, styled } from "@mui/material";

import { mediaQueryHelp } from "@/app/styles/functions";

export const NewsCreateWrap = styled("div")`
  width: clamp(600px, 70vw, 908px);
  max-width: 100%;
  margin: 0 auto;

  svg {
    cursor: pointer;
  }
`;

export const NewsCreateCardWrap = styled(Card)`
  width: 100%;
  flex-grow: 1;
  ${mediaQueryHelp({ padding: { xs: "20px", s: "40px" } })};
`;
