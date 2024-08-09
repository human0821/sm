import { Stack, styled } from "@mui/material";

import { Fonts, Mixins, Transitions } from "@/app/styles";

export const LoaderWrapper = styled("div")`
  position: absolute;
  top: 19px;
  right: 20px;
  & svg {
    width: 26px;
    height: 26px;
  }
`;

export const SurveyRadioWrapper = styled(Stack)`
  row-gap: 10px;
`;

export const SurveyRadioButton = styled("button")<{ active: number; readonly: number; loading?: number }>`
  ${Mixins.buttonClear()}
  position: relative;
  justify-content: space-between;
  text-align: left;
  font-size: 1.125rem;
  line-height: 140%;
  column-gap: 20px;
  padding: 18px 20px;
  border-radius: 15px;
  min-height: 64px;
  transition: all ${Transitions.SMALL};
  ${(props) =>
    props.active || props.loading
      ? `
      border-color: ${props.theme.palette.primary.main};
      background-color: ${props.theme.palette.primary.main};
      border: 1px solid transparent;
      color: ${props.theme.palette.background.default};
      &:hover, &:focus {
        border-color: ${props.theme.palette.primary.main};
        background-color: ${props.theme.palette.primary.main};
      }
      &:active {
        background-color: ${props.theme.palette.primary.main};
      }
    `
      : `
      background-color: transparent;
      border: 1px solid ${props.theme.palette.primary.main}40;
      color: ${props.theme.palette.primary.main};
    `}
  ${(props) =>
    !props.loading && !props.readonly
      ? `
      cursor: default;
    `
      : `
      &:hover {
        border-color: ${props.theme.palette.primary.main};
        background-color: ${props.theme.palette.primary.main};
        color: ${props.theme.palette.background.default};
      }
      &:active {
        background-color: ${props.theme.palette.primary.main};
      }
    `}
`;

export const SurveyRadioAnswer = styled("span")`
  word-break: break-word;
`;

export const SurveyInfo = styled("div")`
  min-width: 50px;
  line-height: 0;
  text-align: right;
`;

export const SurveyRadioReset = styled("button")`
  ${Mixins.buttonClear()}
  align-items: flex-start;
  align-self: flex-start;
  column-gap: 10px;
  color: ${({ theme }) => theme.palette.primary.main};

  & > svg {
    width: 24px;
    height: 24px;
  }
  & > span {
    font-size: 0.875rem;
    line-height: 1.5625rem;
    font-family: ${Fonts.ROCK_STAR_SEMIBOLD};
    letter-spacing: 0.01em;
  }
  &:hover,
  &:active,
  &:focus {
    /* TODO: Нет эффекта наведения */
    text-decoration: underline;
  }
`;
