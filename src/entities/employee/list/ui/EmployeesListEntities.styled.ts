import { styled } from "@mui/material";

import { mediaQueryHelp } from "@/app/styles/functions";

export const ListWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 20px 0;
  width: 100%;
`;
export const ListCardsWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

export const EmptyWrapper = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 80px - 40px - 500px);
  min-height: 200px;
  h1 {
    font-size: 1rem;
    ${mediaQueryHelp({
      fontSize: { s: "1.125rem", m: "1.25rem", l: "1.5rem", xxl: "2rem" },
    })}
  }
  ${mediaQueryHelp({
    height: { xxl: "calc(100vh - 80px - 40px - 200px)" },
  })}
`;
