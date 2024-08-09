import { Typography, styled } from "@mui/material";

import { mediaQueryHelp } from "@/app/styles/functions";
import { Avatar } from "@/shared/ui/Avatar/Avatar";

export const InfoWrapper = styled("div")`
  display: flex;
  column-gap: 20px;
  align-items: center;
`;

export const InfoAvatar = styled(Avatar)`
  align-self: flex-start;
  flex-shrink: 0;
  border-radius: 15px;
  width: 91px;
  height: 91px;
  ${mediaQueryHelp({
    width: { s: "100px", m: "120px", xl: "140px" },
    height: { s: "100px", m: "120px", xl: "140px" },
  })}
`;

export const InfoBlock = styled("div")`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  overflow: hidden;
`;

export const InfoTitle = styled(Typography)`
  word-wrap: break-word;
  font-size: 1rem !important;
  ${mediaQueryHelp({ fontSize: { s: "1.125rem !important", m: "1.25rem !important", xl: "1.5rem !important" } })}
`;

export const InfoPosition = styled("span")`
  color: ${({ theme }) => theme.palette.secondary.main};
  line-height: 1.3;
  font-size: 0.75rem;
  ${mediaQueryHelp({ fontSize: { s: "0.875rem", xl: "1rem" } })}
`;
