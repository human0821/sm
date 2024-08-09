import { styled } from "@mui/material";

import { Functions } from "@/app/styles";

export const BannersHeader = styled("div")`
  display: flex;
  gap: 16px;
  flex-direction: column;
`;

export const BannersTopBlock = styled("div")`
  display: grid;
  gap: 16px;

  ${Functions.mediaQueryHelp({
    gridTemplateColumns: { xs: "1fr", s: "1fr 188px", m: "1fr 260px", l: "1fr 304px", xl: "1fr 363px", xxl: "1fr 443px" },
  })}
`;

export const BannersBottomBlock = styled("div")`
  display: grid;
  gap: 16px;
  grid-template-columns: 1fr;

  ${Functions.mediaQueryHelp({
    gridTemplateColumns: { xxl: "1fr 443px" },
  })}
`;

export const ActiveAndDateWrap = styled("div")`
  display: grid;
  gap: 16px;
  grid-template-columns: 1fr;

  ${Functions.mediaQueryHelp({
    gridTemplateColumns: { m: "1fr 1fr" },
  })}
`;
