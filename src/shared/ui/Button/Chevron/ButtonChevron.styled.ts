import { styled } from "@mui/material";

import { Colors, Mixins, Transitions, Functions } from "@/app/styles";

export const ButtonChevronWrapper = styled("button")<ButtonChevronComponent>`
  ${Mixins.buttonClear()}
  border-radius: 50%;
  transition:
    background-color ${Transitions.SMALL},
    color ${Transitions.SMALL},
    border-color ${Transitions.SMALL},
    transform ${Transitions.SMALL};
  & > svg {
    width: 64%;
    height: 64%;
  }
  ${(props) => {
    switch (props.variant) {
      case "banner-toggle":
        return `
          width: 50px;
          height: 50px;
          ${
            props.active
              ? `
              background-color: ${props.theme.palette.background.default};
              color: ${props.theme.palette.primary.main};
              border: 1px solid ${props.theme.palette.background.paper};
              transform: rotate(-90deg);
              &:hover {
                background-color: ${Colors.GREY_PALE};
              }
              &:active {
                background-color: ${props.theme.palette.background.paper};
              }
            `
              : `
              background-color: ${props.theme.palette.primary.main};
              color: ${props.theme.palette.background.default};
              border: 1px solid ${props.theme.palette.primary.main};
              transform: rotate(90deg);
              &:hover {
                background-color: ${Functions.adjustColor(props.theme.palette.primary.main, -20)};
                border-color: ${Functions.adjustColor(props.theme.palette.primary.main, -20)};
              }
              &:active {
                background-color: ${props.theme.palette.primary.main};
              }
            `
          }
        `;
      case "swiper-navigation":
        return `
          background-color: ${props.theme.palette.background.default}50;
          color: ${props.theme.palette.primary.main};
          border: none;
          width: 40px;
          height: 40px;
          ${props.theme.breakpoints.up("xl")} {
            width: 50px;
            height: 50px;
          }
          &:hover {
            background-color: ${props.theme.palette.background.default};
          }
          &:active {
            background-color: ${props.theme.palette.background.default}90;
          }
        `;
    }
  }}
`;
