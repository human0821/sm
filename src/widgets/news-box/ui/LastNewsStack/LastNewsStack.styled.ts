import { styled } from "@mui/material";

import { Fonts, Breakpoints, Mixins } from "@/app/styles";

export const LastNewsStackText = styled("div")`
  margin: 20px;
  margin-bottom: 0;
  margin-left: 0;
  font-size: 24px;
  font-family: ${Fonts.ROCK_STAR_SEMIBOLD};
  @media (min-width: ${Breakpoints.TABLET_L}) {
    font-size: 24px;
  }
`;

export const LastNewsStackWrapper = styled("div")`
  position: fixed;
  top: 120px;
  right: 0;
  height: calc(100vh - 100px);
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  ${({ theme }) => Mixins.scrollbar({ color: theme.palette.primary.main })}
  overflow-y: auto;
  width: 392px;
  @media (min-width: ${Breakpoints.DESKTOP_L}) {
    width: 464px;
  }
`;
