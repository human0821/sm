import { styled } from "@mui/material";

import { Colors, Fonts } from "@/app/styles";

export const SearchBrandButton = styled("button")<{ $isSelected: boolean }>`
  font-family: ${Fonts.ROCK_STAR_SEMIBOLD};
  border-radius: 6px;
  cursor: pointer;
  color: ${({ $isSelected: isSelected, theme }) =>
    isSelected ? theme.palette.background.default : theme.palette.secondary.main};
  height: 40px;
  padding: 0 16px;
  background: ${({ $isSelected: isSelected, theme }) =>
    isSelected ? theme.palette.primary.main : theme.palette.background.default};
  border: 1px solid ${({ $isSelected: isSelected, theme }) => (isSelected ? theme.palette.primary.main : Colors.GREY_PALE)};

  &:disabled {
    cursor: default;
  }
`;
