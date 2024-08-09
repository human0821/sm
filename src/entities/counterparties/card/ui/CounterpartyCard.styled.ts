import { Typography, styled } from "@mui/material";
import { Link } from "react-router-dom";

import { Mixins } from "@/app/styles";
import { mediaQueryHelp } from "@/app/styles/functions";

export const CardWrapper = styled("div")`
  position: relative;
`;

export const CardContent = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  ${mediaQueryHelp({
    flexDirection: { s: "row" },
    justifyContent: { s: "space-between" },
    alignItems: { s: "center" },
  })}
`;

export const ButtonsWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 26px;
  button {
    min-width: 100%;
    font-size: 0.875rem;
    ${mediaQueryHelp({ fontSize: { m: "1rem", l: "1.125rem" } })}
  }
`;

export const CounterpartyInfo = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 0px;
  overflow: hidden;
`;

export const CounterpartyTitle = styled(Typography)<{ active: boolean }>`
  font-size: 1rem;
  ${({ active, theme }) => (active === false ? `color: ${theme.palette.secondary.main}` : "")}
  ${Mixins.textRowsEllipsis(1, "1.5rem")};
  ${mediaQueryHelp({ fontSize: { s: "1.125rem", m: "1.25rem", xxl: "1.5rem" } })}
`;

export const CounterpartyDescription = styled("div")`
  font-size: 0.75rem;
  line-height: 1.2rem;
  color: ${({ theme }) => theme.palette.secondary.main};
  ${Mixins.textEllipsis()}
  ${mediaQueryHelp({ fontSize: { s: "0.875rem", m: "1rem", xl: "1.125rem" } })}
`;

export const CounterpartyLink = styled(Link)`
  width: 100%;
  height: 100%;
  position: absolute;

  &:hover {
    ~ .сounterparty-substrate {
      box-shadow: 0 0 0 1px ${({ theme }) => theme.palette.secondary.main};
    }
  }
`;
