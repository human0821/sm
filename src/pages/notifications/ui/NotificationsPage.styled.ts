import { styled } from "@mui/material";

import { mediaQueryHelp } from "@/app/styles/functions";

export const PageWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const HeaderWrapper = styled("div")`
  display: grid;
  gap: 16px;
  grid-template-columns: 1fr;
  grid-template-areas: "search" "date" "button";

  ${mediaQueryHelp({
    gridTemplateColumns: { s: "1fr 1fr", l: "1fr 224px 212px", xl: "1fr 328px 212px" }, // eslint-disable-next-line
    gridTemplateAreas: { s: `"search search" "date button"`, l: `"search date button"` },
  })}

  > div {
    &:nth-child(1) {
      grid-area: search;
    }
    &:nth-child(2) {
      grid-area: date;
    }
  }

  > button {
    grid-area: button;
  }
`;

export const LoaderWrapper = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: calc(100vh - 80px - 40px);
  height: 100%;
  position: absolute;
  top: 0;
  background-color: ${({ theme }) => theme.palette.background.default};
`;

export const EmptyWrapper = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 80px - 60px - 80px - 120px);
  width: 100%;
`;

export const NotificationsList = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;
