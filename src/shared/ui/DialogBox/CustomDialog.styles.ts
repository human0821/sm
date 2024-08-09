import { Stack, styled, Typography } from "@mui/material";

import { mediaQueryHelp } from "@/app/styles/functions";

const svgSize = { xs: "46px", s: "53px", m: "60px", l: "83px", xl: "116px" };

export const CustomDialogWindow = styled("div")`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${({ theme }) => theme.palette.background.default};
  border-radius: 30px;
  ${mediaQueryHelp({
    padding: { xs: "20px", s: "30px" },
    width: { xs: "300px", s: "400px", m: "530px", l: "620px", xl: "670px" },
  })}
  max-width: 90vw;

  .MuiBox-root {
    svg {
      ${mediaQueryHelp({ width: svgSize, height: svgSize })}
    }
  }
`;

export const CustomDialogContent = styled("div")`
  display: flex;
  flex-direction: column;
`;

const size = { s: "64px", m: "72px", l: "100px", xl: "140px" };

export const CustomDialogIcon = styled("div")`
  text-align: center;
  margin-bottom: 24px;
  ${mediaQueryHelp({
    marginBottom: { m: "32px", l: "40px" },
  })}
  svg {
    width: 54px;
    height: 54px;
    ${mediaQueryHelp({ width: size, height: size })}
  }
`;

export const CustomDialogTitle = styled(Typography)`
  margin-bottom: 32px;
  ${mediaQueryHelp({
    marginBottom: { m: "40px", l: "60px" },
  })}
`;
