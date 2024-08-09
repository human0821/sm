import { styled } from "@mui/material";

import { Mixins } from "@/app/styles";

export const AccountsList = styled("div")`
  position: relative;
  overflow: hidden;
  max-height: 820px;
`;

export const AccountsListScrollbar = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow: auto;
  height: 100%;
  padding-right: 10px;
  ${({ theme }) => Mixins.scrollbar({ color: theme.palette.primary.main, width: "5px" })}
`;
