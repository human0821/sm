import { Box, styled } from "@mui/material";

import { Colors } from "@/app/styles";
import { mediaQueryHelp } from "@/app/styles/functions";

export const PreviewDesignButtonBack = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1.2;
  background: transparent;
  color: ${({ theme }) => theme.palette.background.default};
  border-radius: 10px;
  padding: 10px;
  min-width: 230px;
  font-size: 0.875rem;
  border: 1px solid ${({ theme }) => theme.palette.background.default};
`;

export const PreviewButtonWrap = styled(Box)`
  pointer-events: all;
  position: fixed;
  max-width: 100vw;
  bottom: 30px;
  right: 0;
  left: 0;
  z-index: 10000;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  & button {
    background: ${Colors.GREY_MIDDLE1};

    &:hover {
      background: ${Colors.GREY_MIDDLE1};
    }
    width: 100%;
    ${mediaQueryHelp({ height: { xs: "auto", s: "64px" }, fontSize: { xs: "0.875rem", m: "1rem", xxl: "1.125rem" } })}
  }

  & > div {
    line-height: 1.2;
    max-width: 95vw;
    ${mediaQueryHelp({
      width: { xs: "auto", s: "536px", m: "670px", l: "649px", xxl: "792px" },
    })}
  }
`;
