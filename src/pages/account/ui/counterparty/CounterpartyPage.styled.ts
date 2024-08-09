import { styled } from "@mui/material";

import { Colors, Fonts, Mixins } from "@/app/styles";
import { mediaQueryHelp } from "@/app/styles/functions";

export const CounterpartyPageWrapper = styled("div")``;

export const LoaderWrapper = styled("div")`
  height: 0;
  position: relative;
  top: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TitleBlock = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 35px;
  button {
    width: 100%;
    font-size: 0.875rem;
    ${mediaQueryHelp({ fontSize: { m: "1rem", xl: "1.125rem" } })}
  }
  h2 {
    font-size: 1.125rem;
    ${mediaQueryHelp({ fontSize: { m: "1.25rem", l: "1.5rem", xl: "2rem" } })}
  }
  ${mediaQueryHelp({
    flexDirection: { s: "row" },
    alignItems: { s: "center" },
    justifyContent: { s: "space-between", m: "flex-start" },
    gap: { m: "30px" },
  })}
`;

export const CounterpartyTitleBlock = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 35px;
  button {
    width: 100%;
    font-size: 0.875rem;
    ${mediaQueryHelp({ fontSize: { m: "1rem", xl: "1.125rem" } })}
  }
  h2 {
    font-size: 1.125rem;
    ${mediaQueryHelp({ fontSize: { m: "1.25rem", l: "1.5rem", xl: "2rem" } })}
  }
  ${mediaQueryHelp({
    flexDirection: { m: "row" },
    gap: { m: "25px" },
  })}
`;

export const CounterpartyPageLayout = styled("div")`
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  ${mediaQueryHelp({
    gridTemplateColumns: { xl: "1fr 2fr" },
    gap: { xl: "20px" },
  })}
`;

export const CounterpartyPageLeftBlock = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const CounterpartyInfoWrapper = styled("div")``;

export const CounterpartyName = styled("div")`
  ${Mixins.textEllipsis()}
  span {
    max-width: 100%;
    display: inline-block;
    height: 32px;
    padding: 10px 20px;
    border-radius: 10px;
    font-family: ${Fonts.ROCK_STAR_SEMIBOLD};
    font-size: 0.75rem;
    line-height: 1;
    letter-spacing: -0.01em;
    color: ${({ theme }) => theme.palette.background.default};
    background-color: ${Colors.GREY_MIDDLE1};
    ${Mixins.textEllipsis()}
    ${mediaQueryHelp({
      fontSize: { s: "0.875rem", m: "1rem", xxl: "1.125rem" },
      height: { m: "36px", xxl: "38px" },
    })}
  }
  ${mediaQueryHelp({
    display: { m: "grid" },
    gridTemplateColumns: { m: "1fr" },
  })}
`;

export const BreadcrumbsWrapper = styled("div")`
  position: relative;
  left: -15px;
  margin-top: -15px;
  li:nth-of-type(1),
  li:nth-of-type(2),
  li:nth-of-type(3) {
    display: none;
    ${mediaQueryHelp({ display: { s: "block" } })}
  }
  li:nth-of-type(4) {
    transform: rotate(180deg);
    ${mediaQueryHelp({ transform: { s: "rotate(0deg)" } })}
  }
  ${mediaQueryHelp({ left: { s: "0" } })}
`;

export const CounterpartyTitleBlockWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 10px;
  ${mediaQueryHelp({
    flexDirection: { s: "row" },
    alignItems: { s: "center" },
    gap: { l: "25px" },
  })}
`;
