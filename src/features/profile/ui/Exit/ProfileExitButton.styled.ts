import { Button, styled } from "@mui/material";

import Fonts from "@/app/styles/fonts";

export const ProfileExit = styled(Button)`
  padding: 0 20px;
  font-size: 1.125rem;
  column-gap: 10px;
  font-family: ${Fonts.GEOLOGICA_REGULAR};
  svg {
    width: 24px;
    height: 24px;
  }
`;
