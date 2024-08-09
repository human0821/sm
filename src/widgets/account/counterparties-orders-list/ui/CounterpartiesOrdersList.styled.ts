import { styled, Typography } from "@mui/material";

import { Colors } from "@/app/styles";
import { mediaQueryHelp } from "@/app/styles/functions";

export const OrdersListWrapper = styled("div")`
  position: relative;
`;

export const OrdersListContent = styled("div")`
  border: 1px solid ${({ theme }) => theme.palette.background.paper};
  padding: 34px 30px;
  border-radius: 0 0 30px 30px;
  transform: translateY(-34px);
  min-height: 550px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const OrdersListHead = styled("div")`
  background: ${Colors.SECTION_BACKGROUND};
  border: 1px solid ${({ theme }) => theme.palette.background.paper};
  padding: 34px 30px;
  border-radius: 30px;
  position: relative;
  z-index: 1;
`;

export const OrdersListEmpty = styled("div")`
  display: flex;
  margin: auto;
  h2 {
    font-size: 0.875rem;
    ${mediaQueryHelp({ fontSize: { s: "1.125rem", l: "1.5rem" } })}
  }
`;

export const Title = styled(Typography)`
  line-height: 0.92;
`;
