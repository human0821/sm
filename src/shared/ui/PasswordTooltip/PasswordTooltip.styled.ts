import { IconButton, styled } from "@mui/material";

export const QuestionButton = styled(IconButton)`
  width: 16px;
  height: 16px;
  padding: 0;
  margin-left: 4px;
  color: inherit;
  &:hover {
    color: ${({ theme }) => theme.palette.primary.main};
  }
`;
