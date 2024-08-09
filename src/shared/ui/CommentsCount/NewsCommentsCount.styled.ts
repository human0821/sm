import { styled } from "@mui/material";

import { buttonClear } from "@/app/styles/mixins";

export const NewsCommentsCountWrapper = styled("button")`
  ${buttonClear()}
  height: 24px;
  font-size: 0.875rem;
  column-gap: 5px;

  & > span {
    color: ${({ theme }) => theme.palette.primary.main};
  }

  &:hover {
    & > span {
      /* TODO: Нет эффекта наведения */
      text-decoration: underline;
    }
  }

  svg {
    color: ${({ theme }) => theme.palette.primary.main};
  }
`;
