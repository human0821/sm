import { Typography, styled } from "@mui/material";

import { mediaQueryHelp } from "@/app/styles/functions";

export const EmptyWrapper = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  height: 100%;
`;

export const EmptyTitle = styled(Typography)`
  color: ${({ theme }) => theme.palette.secondary.main};
  ${mediaQueryHelp({ fontSize: { l: "1.5rem", xxl: "2rem" } })}
`;
