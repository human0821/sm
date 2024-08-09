import { styled } from "@mui/material";

import { mediaQueryHelp } from "@/app/styles/functions";

export const ProfileBonusProgramWrapper = styled("div")`
  display: grid;
  grid-template-columns: 100%;
  gap: 20px;
  ${mediaQueryHelp({ gridTemplateColumns: { l: "100%", xl: "minmax(100px, 1fr) 368px", xxl: "minmax(100px, 1fr) 676px" } })}
`;

export const OrdersWrapper = styled("div")``;
export const BonusConditionsWrapper = styled("div")``;
