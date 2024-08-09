import { Typography, styled } from "@mui/material";

import { Fonts } from "@/app/styles";
import { buttonClear } from "@/app/styles/mixins";

export const LayoutNewsToggleWrapper = styled("div")<{ active: number }>`
  position: relative;
  display: flex;
  align-items: center;
  column-gap: 10px;
  ${(props) =>
    props.active
      ? `
      height: 72px;
      flex-shrink: 0;
      padding: 0 20px 0 80px;
      border-bottom: 1px solid ${props.theme.palette.primary.main}35;
      svg {
        transform: rotate(180deg);
      }
    `
      : `
      position: absolute;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 90px 0;
      width: 100%;
      height: 100%;
      flex: 1;
    `}
`;

export const LayoutNewsToggleButton = styled("button")<{ active: number }>`
  ${buttonClear()}
  position: absolute;
  border-radius: 10px;
  transition: none;
  padding: 0;
  ${(props) =>
    props.active
      ? `
    top: 16px;
    left: 20px;
    width: 40px;
    height: 40px;
    svg {
      width: 32px;
      height: 32px;
    }
    &:hover {
      background-color: ${props.theme.palette.background.paper};
    }
  `
      : `
    background-color: ${props.theme.palette.primary.main};
    color: ${props.theme.palette.background.default};
    top: 10px;
    left: 8px;
    width: 40px;
    height: 40px;
    svg {
      width: 24px;
      height: 24px;
    }
    ${props.theme.breakpoints.up("xl")} {
      top: 10px;
      left: 34px;
      width: 58px;
      height: 58px;
      svg {
        width: 32px;
        height: 32px;
      }
    }
    &:hover {
      background-color: ${props.theme.palette.primary.main};
    }
  `}
`;

export const LayoutNewsToggleText = styled(Typography)<{ active: number }>`
  white-space: nowrap;
  ${(props) =>
    props.active
      ? `

    `
      : `
      text-align: center;
      font-size: 1.5rem;
      writing-mode: vertical-rl;
      transform: rotate(180deg);
      ${props.theme.breakpoints.up("xl")} {
        font-size: 2.5rem;
      }
    `}
`;

export const LayoutNewsMobileToggleText = styled(Typography)`
  font-size: 1.125rem;
  margin: 40px 0 10px;
  font-family: ${Fonts.ROCK_STAR_SEMIBOLD};
`;
