import { Button, IconButton, styled } from "@mui/material";

import Colors from "@/app/styles/colors";
import Fonts from "@/app/styles/fonts";

export const DeliveryAction = styled(IconButton)`
  color: ${({ theme }) => theme.palette.secondary.main};
  svg {
    width: 24px;
    height: 24px;
  }
`;

export const DeliveryAdd = styled(Button)`
  font-family: ${Fonts.GEOLOGICA_REGULAR};
  font-size: 1rem;
  padding: 4px 12px;
  height: initial;
  color: ${Colors.GREEN_MAIN};
`;
