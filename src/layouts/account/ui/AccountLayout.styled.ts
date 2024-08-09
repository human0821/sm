import { Typography, Tab, styled } from "@mui/material";

import { mediaQueryHelp } from "@/app/styles/functions";

const resolveLayoutColumns = (isCounterparties?: boolean) =>
  mediaQueryHelp({
    gridTemplateColumns: { [isCounterparties ? "xl" : "xxl"]: "2fr 1fr !important" },
  });

const resolveManagerWrapper = (isCounterparties?: boolean) =>
  mediaQueryHelp({
    flexDirection: { l: "row", [isCounterparties ? "xl" : "xxl"]: "column" },
    alignItems: { l: "center", xxl: "flex-start" },
  });

const resolveManagerWrapperButton = (isCounterparties?: boolean) =>
  mediaQueryHelp({
    justifyContent: { s: "space-between" },
    fontSize: { m: "1rem", xl: "1.125rem" },
    width: { l: "356px", xl: isCounterparties ? "100% !important" : "384px !important", xxl: "100% !important" },
  });

export const AccountLayoutWrapper = styled("div")`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const AccountTitle = styled(Typography)`
  margin: 0 0 30px;
`;

export const AccountTabs = styled("div")`
  margin-bottom: 40px;
`;

export const AccountTab = styled(Tab)`
  max-width: calc(100% / 5 - 80px / 4);
  width: 100%;
  white-space: nowrap;

  &:last-of-type {
    max-width: calc(100% / 5 + 80px);
  }
`;

export const Layout = styled("div")<{ manager?: StoreUser.Manager; isCounterparties?: boolean }>`
  ${({ manager }) =>
    manager
      ? `
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  `
      : ""}
  ${({ isCounterparties }) => resolveLayoutColumns(isCounterparties)}
`;

export const ManagerWrapper = styled("div")<{ isCounterparties?: boolean }>`
  margin-top: 20px;
  button {
    max-width: none;
    font-size: 0.8125rem;
    justify-content: center;
    span:nth-of-type(1) {
      position: relative;
      top: 5px;
      display: none;
      ${mediaQueryHelp({ display: { s: "block" } })}
    }
    ${({ isCounterparties }) => resolveManagerWrapperButton(isCounterparties)}
  }
  > div > div > div {
    ${({ isCounterparties }) => resolveManagerWrapper(isCounterparties)}
  }
`;
