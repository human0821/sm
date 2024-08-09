import { styled } from "@mui/material";
import { motion } from "framer-motion";

import { Fonts, Transitions } from "@/app/styles";
import { mediaQueryHelp } from "@/app/styles/functions";
import { textEllipsis } from "@/app/styles/mixins";

const resolveWrapperWidth = (active: number) => active
  ? mediaQueryHelp({ width: { m: "424px", xl: "391px", xxl: "473px" } })
  : mediaQueryHelp({ width: { l: "220px", xxl: "250px" } });

export const ProfileAdminHeaderContainer = styled("div")`
  position: relative;
  height: 100%;
  z-index: 10;
  width: 70px;
  ${mediaQueryHelp({ width: { l: "220px", xxl: "250px" } })}
`;

export const ProfileAdminHeaderWrapper = styled("div")<{ active: number }>`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: ${(props) => `${props.active ? "100vw" : "70px"}`};
  background-color: ${({ active, theme }) => (active ? theme.palette.background.default : "none")};
  transition: background-color ${Transitions.SMALL}, width ${Transitions.MEDIUM};
  ${(props) => resolveWrapperWidth(props.active)}
`;

export const ProfileAdminHeaderProfile = styled("div")<{ active: number }>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  overflow: hidden;
  height: 100%;
  gap: 20px;
  outline: none;
  border: none;
  border-left: 1px solid ${({ theme }) => theme.palette.primary.main}30;
  font-family: ${Fonts.ROCK_STAR_SEMIBOLD};
  font-size: 1.125rem;
  cursor: pointer;
  /* TODO: Вынести в миксин */
  background-color: ${(props) =>
    props.active ? `${props.theme.palette.primary.main}08` : `${props.theme.palette.primary.main}00`};
  transition: background-color ${Transitions.SMALL};
  padding: 0 17px;
  ${(props) => props.theme.breakpoints.up("xl")} {
    padding: 0 20px;
  }
  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.palette.primary.main}08;
  }
  &:active {
    background-color: ${({ theme }) => theme.palette.primary.main}10;
  }
  & > img {
    width: 24px;
    height: 24px;
    min-width: 0;
    min-height: 0;
    ${mediaQueryHelp({
      width: { xl: "32px" },
      height: { xl: "32px" }
    })}
    flex-shrink: 0;
  }
  & > span {
    flex: 1;
    text-align: left;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 100%;
    overflow: hidden;
  }
`;

export const ProfileAdminHeaderAvatar = styled("img")`
  width: 32px;
  height: 32px;
  object-fit: contain;
  object-position: center;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.palette.primary.main};
`;

export const ProfileAdminHeaderDropdown = styled("div")<{ active: number }>`
  ${(props) =>
    props.active
    ? `
    opacity: 1;
    visibility: visible;
    transition: opacity ${Transitions.SMALL} ease ${Transitions.MEDIUM}, visibility ${Transitions.SMALL} ease ${Transitions.MEDIUM};
    `
    : `
    opacity: 0;
    visibility: hidden;
    transition: opacity ${Transitions.SMALL}, visibility ${Transitions.SMALL};
    `}
  position: absolute;
  top: 100%;
  right: 0;
  overflow-y: auto;
  background-color: ${({ theme }) => theme.palette.background.default};
  border: 1px solid ${({ theme }) => theme.palette.primary.main}30;
  border-right: none;
  width: 100%;
  height: 100vh;
  ${mediaQueryHelp({
    width: { m: "424px", xl: "391px", xxl: "473px" },
    height: { xl: "auto" }
  })}
`;

export const ProfileAdminHeaderOption = styled("button")`
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 10px 20px;
  height: 60px;
  border: none;
  outline: none;
  cursor: pointer;
  column-gap: 20px;
  background-color: transparent;
  transition: background-color ${Transitions.SMALL};
  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.palette.primary.main}08;
  }
  &:active {
    background-color: ${({ theme }) => theme.palette.primary.main}10;
  }
  & > svg {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
    color: ${({ theme }) => theme.palette.primary.main};
    ${mediaQueryHelp({
      width: { s: "32px" },
      height: { s: "32px" }
    })}
  }
`;

export const ProfileAdminHeaderOptionTitle = styled("span")`
  font-family: ${Fonts.ROCK_STAR_SEMIBOLD};
  font-size: 0.875rem;
  flex: 1 1 auto;
  text-align: left;
  color: ${({ theme }) => theme.palette.primary.main};
  ${mediaQueryHelp({ fontSize: { s: "1rem", m: "1.125rem" } })}
`;

export const ProfileAdminHeaderOptionDescription = styled("span")`
  text-align: right;
  font-size: 0.75rem;
  line-height: 1.3125rem;
  color: ${({ theme }) => theme.palette.primary.main}60;
  flex: 1 1 auto;
  ${textEllipsis()};
  ${mediaQueryHelp({ fontSize: { s: "0.875rem" } })}
`;

export const ProfileAdminHeaderBackdrop = styled(motion.div)`
  position: fixed;
  top: 64px;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.palette.primary.main}60;
  z-index: 9;
  display: block;
  ${mediaQueryHelp({ display: { xl: "none !important" } })}
`;