import { Typography, styled } from "@mui/material";

import Fonts from "@/app/styles/fonts";
import { textEllipsis } from "@/app/styles/mixins";

export const AuthProfileCardWrapper = styled("div")`
  display: flex;
  column-gap: 10px;
  align-items: center;
`;

export const AuthProfileCardAvatar = styled("img")`
  width: 40px;
  height: 40px;
  background-color: transparent;
  object-fit: cover;
  object-position: center;
  border-radius: 4px;
`;

export const AuthProfileCardInfo = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: start;
  max-width: 100%;
  row-gap: 8px;
  overflow: hidden;
`;

export const AuthProfileCardTitle = styled(Typography)`
  font-size: 1rem;
  line-height: 1;
  font-family: ${Fonts.GEOLOGICA_MEDIUM};
  max-width: 100%;
  ${textEllipsis()}
`;

export const AuthProfileCardEmail = styled(Typography)`
  line-height: 1;
  font-family: ${Fonts.GEOLOGICA_REGULAR};
  max-width: 100%;
  ${textEllipsis()}
`;
