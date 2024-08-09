import { styled } from "@mui/material";
import { motion } from "framer-motion";

import { Breakpoints, Fonts, Mixins, Transitions } from "@/app/styles";

import NewsWidgetWidths from "../consts/NewsWidgetWidths";

export const LayoutNewsWidgetWrapper = styled("div")<{ active: number; isMobile: boolean; canToggle: boolean }>`
  ${(props) =>
    `${
      props.canToggle
        ? ""
        : `
    [id="lastnewstitle"] {
      margin: 0;
      margin: 0;
      margin-bottom: 0;
      margin-left: 0;
      font-size: 24px;
      font-family: ${Fonts.ROCK_STAR_SEMIBOLD};
      @media(min-width: ${Breakpoints.TABLET_L}) {
        font-size: 24px;
      }
    }
  `
    }`}
  ${(props) =>
    props.isMobile
      ? ""
      : `
    position: fixed;
    display: flex;
    flex-direction: column;
    height: 100%;
    max-height: calc(100vh - 80px);
    overflow: hidden;
    background-color: ${props.theme.palette.background.default};
    border-left: ${props.canToggle ? "1px" : "0px"} solid ${props.theme.palette.primary.main}35;
    transition: width ${Transitions.MEDIUM};
    ${
      props.active
        ? `
        width: ${NewsWidgetWidths.LG_FULL}px;
        ${props.theme.breakpoints.up("xl")} {
          width: ${NewsWidgetWidths.XL_FULL - 10}px;
        }
      `
        : `
        width: ${NewsWidgetWidths.LG_SHORT}px;
        ${props.theme.breakpoints.up("xl")} {
          width: ${NewsWidgetWidths.XL_SHORT}px;
        }
    `
    }
  `}
`;

export const LayoutNewsWidgetContent = styled("div")<{ isMobile: boolean; canToggle: boolean }>`
  ${({ theme }) => Mixins.scrollbar({ color: theme.palette.primary.main, visible: false })}
  overflow-y: auto;
  flex: 1;
  display: flex;
  flex-direction: column;
  width: ${(props) => (props.isMobile ? "100%" : `${NewsWidgetWidths.LG_FULL}px`)};
  padding-bottom: ${(props) => (props.canToggle ? "40px" : "100px")};
  ${(props) => props.theme.breakpoints.up("xl")} {
    width: ${NewsWidgetWidths.XL_FULL - 10}px;
  }
  & > *:not(:first-of-type) {
    border-top: 1px solid ${({ theme }) => theme.palette.primary.main}35;
  }
`;

export const LayoutNewsWidgetMotion = styled(motion.div)`
  flex: 1;
  display: flex;
  flex-direction: column;
  & > *:not(:first-of-type) {
    border-top: 1px solid transparent;
    @media (min-width: ${Breakpoints.TABLET_L}) {
      border-top: 1px solid ${({ theme }) => theme.palette.primary.main}35;
    }
  }
`;
