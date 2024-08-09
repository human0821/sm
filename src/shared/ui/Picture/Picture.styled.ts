import { styled } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";

import Transitions from "@/app/styles/transitions";

// https://stackoverflow.com/questions/71128841/mui-system-how-to-pass-transient-props-to-styled
const transient = { shouldForwardProp: (prop: any) => !["width", "height", "visible", "container"].includes(prop) };

const SkeletonStyle = `
  transform-origin: unset;
  transform: unset;
  border-radius: 8px;
  &:before {
    display: none;
  }
`;

export const Wrapper = styled("div", transient)<Wrapper>`
  position: relative;
  overflow: hidden;
  ${(props) => `
    width: ${props.container ? props.container.width : `${props.width}px`};
    height: ${props.container ? props.container.height : `${props.height}px`};
  `}
`;

export const Placeholder = styled(Skeleton, transient)<Placeholder>`
  ${SkeletonStyle}
  ${(props) => `
    padding-top: ${props.container ? 0 : (props.height! / props.width!) * 100}%;
    width: 100%;
    height: 100%;
  `}
  background-color: ${({ theme }) => theme.palette.background.paper};
`;

export const Pic = styled("picture", transient)<Partial<Pic>>`
  position: absolute;
  top: 0;
  left: 0;
  width: inherit;
  height: inherit;
  transition: opacity ${Transitions.MEDIUM} ease;
  opacity: ${(props) => (props.visible ? "1" : "0")};
  img {
    object-fit: cover;
    object-position: center;
    width: inherit;
    height: inherit;
  }
`;

export const FallbackImageWrapper = styled("div")<Pic>`
  position: absolute;
  top: 0;
  left: 0;
  width: inherit;
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.background.disabled};
  transition: opacity ${Transitions.LARGE} ease;
  opacity: ${(props) => (props.visible ? "1" : "0")};
  & svg {
    width: 27px;
    height: 27px;
    path {
      fill: ${({ src, theme }) => (src ? theme.palette.secondary.main : "")};
    }
  }
`;
