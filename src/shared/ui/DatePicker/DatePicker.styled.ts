import { styled } from "@mui/material";

import { Fonts } from "@/app/styles";

import { Flex } from "../Flex";

export const DatePickerHeader = styled(Flex)`
  margin: 0 auto;
  font-family: ${Fonts.ROCK_STAR_SEMIBOLD};
  font-size: 1.125rem;
  svg {
    cursor: pointer;
    height: 10px;
  }
`;

export const DatePickerWrap = styled("div")`
  pointer-events: none;

  button {
    pointer-events: all;
  }
`;
