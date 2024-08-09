import { Button, IconButton, styled } from "@mui/material";

import { Breakpoints, Mixins, Colors, Fonts } from "@/app/styles";
import { SendIcon as Icon } from "@/assets/icons";

export const SendIcon = styled(Icon)<{ disabled?: boolean }>`
  color: ${({ disabled, theme }) => (disabled ? Colors.GREY_PALE : theme.palette.primary.main)};
`;

const centerFlex = `
  display: flex;
  align-items: center;
`;

const buttonCommon = `
  font-size: 0.875rem;
  min-width: auto;
  width: 100%;
  height: 48px;
  box-sizing: border-box;
  padding: 10px 20px;
`;

export const Wrapper = styled("div")<{ editing: boolean }>`
  line-height: 1;
  position: relative;
  box-sizing: border-box;
  padding: 0 15px;
  border-radius: 12px;
  margin-top: 15px;
  border: 2px solid ${Colors.GREY_PALE};
  background-color: ${(props) => (props.editing ? Colors.GREY_PALE : "transparent")};
`;

export const SendButton = styled(IconButton)`
  position: absolute;
  top: 0;
  right: 20px;
  svg {
    width: 32px;
    height: 32px;
  }
`;

// cursor: auto https://stackoverflow.com/questions/54404573/mouse-hover-over-textarea-scrollbar-gives-text-cursor-instead-of-default-cursor
export const Textarea = styled("textarea")<TextareaContainer.Textarea>`
  background: transparent;
  font: 0.75rem ${Fonts.GEOLOGICA_REGULAR};
  resize: none;
  padding-top: 16px;
  padding-right: 45px;
  width: 100%;
  border: 0;
  cursor: auto;
  color: ${({ theme }) => theme.palette.primary.main};
  height: ${(props) => props.height}px;
  ${({ theme }) => Mixins.scrollbar({ color: theme.palette.primary.main })}

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${({ theme }) => `${theme.palette.primary.main}60`};
    opacity: 1;
  }

  @media (min-width: ${Breakpoints.MOBILE_L}) {
    padding-top: 14px;
    font-size: 0.875rem;
  }
  @media (min-width: ${Breakpoints.TABLET_L}) {
    padding-top: 12px;
    font-size: 1.125rem;
  }
`;

export const SwitchText = styled("div")`
  margin-left: 10px;
  cursor: default;
`;

export const SwitchBottom = styled("div")`
  ${centerFlex}
  padding: 14px 0;
  font: 0.875rem ${Fonts.GEOLOGICA_REGULAR};
  border-top: 2px solid ${Colors.GREY_PALE};
`;

export const EditingBottom = styled("div")`
  padding: 14px 0;
  @media (min-width: ${Breakpoints.MOBILE_L}) {
    display: flex;
    justify-content: flex-end;
    gap: 15px;
  }
`;

export const CancelButton = styled(Button)`
  ${buttonCommon}
  background-color: ${({ theme }) => theme.palette.background.default};
  @media (min-width: ${Breakpoints.MOBILE_L}) {
    width: 162px;
  }
`;

export const SaveButton = styled(Button)`
  ${buttonCommon}
  margin-top: 15px;
  @media (min-width: ${Breakpoints.MOBILE_L}) {
    width: 162px;
    margin-top: 0px;
  }
`;
