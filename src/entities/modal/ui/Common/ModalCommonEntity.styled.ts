import { IconButton, styled } from "@mui/material";

import { iconSize } from "@/app/styles/mixins";

export const CommonWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  max-width: 670px;
  padding: 32px 40px 40px;
`;

export const CommonHeader = styled("div")`
  position: relative;
  display: flex;
  justify-content: space-between;
  column-gap: 20px;
  padding-right: 40px;
`;

export const CommonClose = styled(IconButton)`
  position: absolute;
  top: -6px;
  right: -6px;
  color: ${({ theme }) => theme.palette.primary.main};
  ${iconSize(32)}
`;

export const CommonDescription = styled("div")`
  margin-top: 20px;
  font-size: 1.125rem;
  line-height: 1.6875rem;
  color: ${({ theme }) => theme.palette.secondary.main};
`;

export const CommonContent = styled("div")`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
`;
