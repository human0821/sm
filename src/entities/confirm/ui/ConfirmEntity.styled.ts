import { Button, styled } from "@mui/material";

import { Breakpoints } from "@/app/styles/breakpoints";
import Colors from "@/app/styles/colors";
import Fonts from "@/app/styles/fonts";
import { rgba } from "@/app/styles/functions";
import Transitions from "@/app/styles/transitions";

export const Wrapper = styled("div")``;
export const ConfirmBackdrop = styled("div")<Confirm.Backdrop>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 999;
  background-color: ${rgba(Colors.BLACK, 0.5)};
  transition:
    opacity ${Transitions.SMALL} ease,
    backdrop-filter ${Transitions.SMALL} ease;
  ${(props) => `
    visibility: ${props.show ? "visible" : "hidden"};
    backdrop-filter: ${props.show ? "blur(3px)" : "blur(0)"};`}
  @media (min-width: ${Breakpoints.MOBILE_L}) {
    display: none;
  }
`;
export const ConfirmWrapper = styled("div")<Confirm.DataState>`
  position: fixed;
  width: 265px;
  top: 50%;
  left: 50%;
  padding: 12px 15px;
  box-sizing: border-box;
  border-radius: 16px;
  z-index: 9999;
  transition:
    opacity ${Transitions.SMALL} ease,
    transform ${Transitions.SMALL} ease;
  font: 0.87rem ${Fonts.ROCK_STAR_SEMIBOLD};
  background-color: ${Colors.GREY_PALE};
  ${(props) => `
    opacity: ${props.show ? "1" : "0"};
    transform: ${props.show ? "scale(1)" : "scale(0.5)"} translate(-50%, -50%);
    visibility: ${props.show ? "visible" : "hidden"};`}

  @media (min-width: ${Breakpoints.MOBILE_L}) {
    width: 365px;
    position: absolute;
    ${(props) => `
      top: ${props.show ? props.y : 0}px;
      left: ${props.show ? props.x : 0}px;
      transform: ${props.show ? "scale(1)" : "scale(0.5)"} translate(-95%, -110%);`}
  }
  @media (min-width: ${Breakpoints.TABLET_L}) {
    width: 390px;
  }
`;
export const Title = styled("div")`
  margin-bottom: 20px;
`;
export const Buttons = styled("div")`
  display: flex;
  gap: 15px;
`;
export const CancelButton = styled(Button)`
  flex: 1;
  font-size: 0.87rem;
  height: 48px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.palette.background.default};
`;
export const OKButton = styled(Button)`
  flex: 1;
  font-size: 0.87rem;
  height: 48px;
  border-radius: 12px;
`;
