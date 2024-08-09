import { styled } from "@mui/material";

import { Colors, Fonts } from "@/app/styles";

export const Wrapper = styled("div")<{ variant: Snackbar["variant"] }>`
  display: flex;
  align-items: center;
  gap: 14px;
  background-color: ${({ variant }) => (variant === "error" ? Colors.ERROR : Colors.GREEN_MAIN)};
  font-family: ${Fonts.GEOLOGICA_REGULAR};
  font-size: 1rem;
  line-height: 1rem;
  color: ${({ theme }) => theme.palette.background.default};
  padding: 16px 30px 18px 26px;
  border-radius: 10px;

  svg {
    color: ${({ theme }) => theme.palette.background.default};
    width: 12px;
    height: 9px;
  }
`;
