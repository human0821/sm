import { styled, Typography } from "@mui/material";

import { Transitions, Functions } from "@/app/styles";

export const CardWrapper = styled("div")<{ color: string; area: string }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 4px;
  background: ${({ color }) => color};
  color: ${({ theme }) => theme.palette.background.default};
  border-radius: 15px;
  overflow: hidden;
  height: 154px;
  position: relative;
  ${({ area }) =>
    Functions.mediaQueryHelp({ gridArea: { m: area }, height: { s: "205px", m: "230px" }, borderRadius: { s: "20px" } })}
`;

export const CardHeader = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 12px 12px 0 12px;

  ${Functions.mediaQueryHelp({
    gap: { l: "16px" },
    justifyContent: { m: "space-between" },
    flexDirection: { m: "row" },
    flexWrap: { m: "wrap", l: "nowrap" },
    padding: { s: "20px 20px 0 20px" },
  })}
`;

export const CategoryName = styled(Typography)`
  hyphens: auto;
  max-width: 100%;
  ${Functions.mediaQueryHelp({ maxWidth: { l: "calc(100% - 100px - 16px)" } })}
`;

export const CategoryDesc = styled("div")`
  font-size: 0.75rem;
  line-height: 0.75rem;
  white-space: nowrap;
  flex-shrink: 0;

  ${Functions.mediaQueryHelp({
    fontSize: { m: "1rem" },
    lineHeight: { m: "1rem" },
    maxWidth: { l: "100px" },
    textAlign: { l: "right" },
  })}
`;

export const ImgWrapper = styled("div")`
  padding-left: 80px;
  max-height: 94px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  max-width: 100%;

  ${Functions.mediaQueryHelp({ maxHeight: { s: "140px", m: "120px", l: "154px" }, paddingLeft: { s: "20px" } })}
`;

export const Img = styled("img")<{ loaded: boolean }>`
  object-fit: contain;
  width: 100%;
  height: 100%;
  transition: all ${Transitions.MEDIUM} ease-in-out;

  ${({ loaded }) => (loaded ? "opacity: 1;" : "opacity: 0;")}
`;
