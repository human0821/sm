import { IconButton, styled } from "@mui/material";

import { Breakpoints, Colors, Transitions, Mixins } from "@/app/styles";

export const ImageUploaderWrapper = styled("label")<{ disabled?: boolean; error?: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  border-radius: 20px;
  background-color: ${({ theme }) => `${theme.palette.text.primary}15`};
  cursor: pointer;
  overflow: hidden;
  transition: all ${Transitions.MEDIUM} ease-in-out;

  ${({ disabled, error }) => `
  ${disabled ? "opacity: 0.8; pointer-events: none;" : ""}
  ${error ? `box-shadow: 0px 0px 0 1px ${Colors.RED_MAIN};` : ""}
  `}
`;

export const ImageUploaderHover = styled("div")<{ loading?: number; stub?: number }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 6px;
  background-color: ${Colors.BLACK}40;
  transition:
    opacity ${Transitions.MEDIUM},
    color ${Transitions.MEDIUM},
    background-color ${Transitions.MEDIUM};
  &:hover {
    opacity: 1;
  }

  ${(props) => {
    if (props.stub) {
      return `
        opacity: 1;
        background-color: transparent;
        color: ${props.theme.palette.text.primary};
        &:hover,
        &:focus-within {
          background-color: ${props.theme.palette.primary.main}35;
        }
      `;
    } else if (props.loading) {
      return `
        opacity: 1;
        background-color: ${Colors.BLACK}50;
        color: ${props.theme.palette.text.primary};
      `;
    } else {
      return `
        opacity: 0;
        color: ${props.theme.palette.text.primary};
      `;
    }
  }}
`;

export const ImageUploaderInput = styled("input")`
  opacity: 0;
  visibility: hidden;
  position: absolute;
  left: -9999px;
`;

export const ImageUploaderDelete = styled(IconButton)`
  position: absolute;
  z-index: 1;
  top: 12px;
  right: 12px;
  color: ${({ theme }) => theme.palette.background.default};
  svg {
    width: 24px;
    height: 24px;
  }
`;

export const ImageUploaderAdd = styled(IconButton)`
  pointer-events: none;
  color: inherit;
  align-self: center;
  svg {
    width: 50px;
    height: 50px;

    @media (min-width: ${Breakpoints.MOBILE_L}) {
      width: 62px;
      height: 62px;
    }
  }
`;

export const ImageUploaderText = styled("span")`
  position: relative;
  font-size: 1.125rem;
  line-height: 1.75rem;
  color: inherit;
  pointer-events: none;
`;

export const VideoWrapper = styled("div")`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const VideoPreview = styled("video")`
  max-width: 100%;
  max-height: 100%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  position: absolute;
`;

export const VideoPlay = styled("button")`
  ${Mixins.buttonClear()}
  z-index: 2;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.palette.background.default}50;
  transition: background-color ${Transitions.SMALL};
  width: 50px;
  height: 50px;

  & > svg {
    width: 28px;
    height: 28px;
    color: ${({ theme }) => theme.palette.primary.main};
  }
`;

export const ErrorMessage = styled("div")`
  position: absolute;
  bottom: -24px;
  font-size: 0.875rem;
  color: ${Colors.RED_MAIN};
  ${Mixins.textRowsEllipsis(1, "22px")}
`;

export const ImageContainer = styled("div")`
  position: relative;
  height: 100%;
`;
