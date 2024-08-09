import { Stack, styled } from "@mui/material";

import { Colors, Fonts, Mixins } from "@/app/styles";
import { mediaQueryHelp } from "@/app/styles/functions";

export const ProfileCasesWrapper = styled("div")`
  font-size: 18px;
`;

export const LoaderWrapper = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-grow: 1;
`;

export const NoCase = styled("div")`
  font-family: ${Fonts.ROCK_STAR_SEMIBOLD};
  font-size: 24px;
  color: ${({ theme }) => theme.palette.secondary.main};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const ConditionsWrapper = styled("div")`
  ul {
    margin: 0;
    margin-left: 17px;
    padding: 0;
  }
  li {
    ${mediaQueryHelp({
      fontSize: { xs: "0.75rem", s: "1rem", m: "1.125rem" },
    })}

    &:last-of-type {
      margin-bottom: 0;
    }
  }
`;

export const CasesGrid = styled("div")`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: minmax(120px, auto);
  gap: 20px;

  ${mediaQueryHelp({ gridTemplateColumns: { m: "1fr 1fr" } })}
`;
CasesGrid.displayName = "CasesGrid";

export const CasesContainer = styled("div")``;

export const CaseItemTitle = styled("div")<{ blackTitle?: boolean }>`
  ${mediaQueryHelp({ fontSize: { xs: "0.875rem", s: "1.125rem" } })}
  display: flex;
  align-items: end;
  color: ${(props) => (props.blackTitle ? props.theme.palette.primary.main : props.theme.palette.secondary.main)};
  > span {
    &:nth-of-type(2) {
      display: inline-flex;
      flex: 1;
      box-sizing: border-box;
      position: relative;
      top: -4px;
      padding-left: 20px;
      ${mediaQueryHelp({ margin: { xs: "0 3px", m: "0 6px" } })}
      border-bottom: 2px dashed ${({ theme }) => theme.palette.secondary.main};
    }
    &:nth-of-type(3) {
      color: ${({ theme }) => theme.palette.primary.main};
    }
  }
`;

export const YourCaseTitle = styled("div")`
  ${mediaQueryHelp({ fontSize: { xs: "1rem", s: "1.25rem", l: "1.5rem" } })}
  font-family: ${Fonts.ROCK_STAR_SEMIBOLD};
`;

export const YourCase = styled("div")``;
export const CasesChangeHistory = styled("div")``;

export const CasesHistoryList = styled(Stack)`
  overflow-y: auto;
  flex-grow: 1;
  max-height: 80%;
  ${({ theme }) => Mixins.scrollbar({ color: theme.palette.primary.main, width: "3px" })}
  gap: 20px;

  ${mediaQueryHelp({ paddingRight: { xs: "10px" } })}
`;

export const NextMonthCases = styled("div")`
  svg {
    margin-top: 20px;
  }
`;

export const NextMonthCasesTitle = styled("div")`
  font-family: ${Fonts.ROCK_STAR_SEMIBOLD};
  ${mediaQueryHelp({
    fontSize: { xs: "0.75rem", s: "1.125rem", m: "1.25rem", l: "1.5rem", xl: "2rem" },
    height: { xs: "48px", s: "58px", m: "65px", l: "96px", xl: "100px" },
    padding: { xs: "14px 20px", l: "14px 40px" },
  })};
  background-color: ${Colors.BLUE_LIGHT};
  border-radius: 20px;
  padding: 14px 18px;
  margin-top: 20px;
  display: flex;
  align-items: center;
`;

export const NextMonthCasesItems = styled("div")`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 20px;
  margin-top: 20px;

  ${mediaQueryHelp({ gridTemplateColumns: { m: "repeat(2, 1fr)", xxl: "repeat(4, 1fr)" } })}
`;
