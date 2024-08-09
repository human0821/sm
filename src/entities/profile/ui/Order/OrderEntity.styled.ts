import { Card, styled } from "@mui/material";

import { Colors, Mixins } from "@/app/styles";
import { mediaQueryHelp } from "@/app/styles/functions";

export const Order = styled(Card)`
  padding: 25px 20px;
  border-radius: 20px;
  margin-bottom: 20px;
`;

export const OrderItems = styled("div")`
  ${({ theme }) => Mixins.scrollbar({ color: theme.palette.primary.main, width: "2px" })}
  display: flex;
  gap: 20px;
  overflow-x: auto;
  padding-bottom: 20px;
  > * {
    min-width: 150px;
    border-radius: 7px;
  }
`;

export const OrderTopWrapper = styled("div")`
  display: flex;
  margin-bottom: 16px;

  ${mediaQueryHelp({ marginBottom: { s: "30px" } })}
`;

export const LeftWrapper = styled("div")`
  flex: 1;
`;

export const RightWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 7px;
`;

export const OrderNumber = styled("div")`
  ${mediaQueryHelp({ fontSize: { xs: "1rem", s: "1.125rem", l: "1.25rem", xl: "1.5rem" } })}
`;

export const OrderDate = styled("div")`
  color: ${Colors.GREY_MAIN};
  ${mediaQueryHelp({ fontSize: { xs: "0.75rem", m: "0.875rem" } })}
`;

export const OrderPrice = styled("div")`
  span {
    ${mediaQueryHelp({ fontSize: { xs: "0.875rem", s: "1rem", m: "1.125rem" } })}
  }

  display: flex;
  gap: 5px;
`;

export const OrderPendingText = styled("div")`
  ${mediaQueryHelp({ fontSize: { xs: "0.75rem", m: "0.875rem" } })}
  color: ${Colors.GREY_MAIN};
`;
