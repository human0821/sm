import { styled } from "@mui/material";

import { Breakpoints, Fonts, Mixins } from "@/app/styles";

const centerFlex = `
  display: flex;
  align-items: center;
`;

export const CommentWrapper = styled("div")``;
export const Comment = styled("div")`
  display: flex;
  flex-direction: column;
  margin-top: 35px;
  @media (min-width: ${Breakpoints.MOBILE_L}) {
    flex-direction: row;
  }
`;
export const TopWrapper = styled("div")`
  ${centerFlex}
  line-height: 1.2;
  @media (min-width: ${Breakpoints.MOBILE_L}) {
    align-items: flex-start;
  }
`;
export const PictureWrapper = styled("div")`
  width: 42px;
  height: 42px;
  min-width: 42px;
  margin-right: 10px;
  border-radius: 5px;
  overflow: hidden;
  @media (min-width: ${Breakpoints.MOBILE_L}) {
    width: 80px;
    height: 80px;
  }
`;
export const Userdata = styled("div")`
  display: grid;
  grid-template-columns: 1fr;
  @media (min-width: ${Breakpoints.MOBILE_L}) {
    display: none;
  }
`;
export const Details = styled("div")`
  position: relative;
  flex: 1;
  @media (min-width: ${Breakpoints.MOBILE_L}) {
    margin-left: 15px;
  }
`;
export const Top = styled("div")`
  display: none;
  line-height: 1.2;
  @media (min-width: ${Breakpoints.MOBILE_L}) {
    align-items: center;
    display: grid;
    grid-template-columns: auto 1fr;
  }
`;
export const Username = styled("div")`
  word-break: break-word;
  ${Mixins.textEllipsis()}
  font-family: ${Fonts.ROCK_STAR_SEMIBOLD};
  font-size: 1rem;
  @media (min-width: ${Breakpoints.MOBILE_L}) {
    font-size: 1.25rem;
  }
  @media (min-width: ${Breakpoints.TABLET_L}) {
    font-size: 1.5rem;
  }
`;
export const Date = styled("div")`
  color: ${({ theme }) => theme.palette.secondary.main};
  font-size: 0.75rem;
  white-space: nowrap;
  @media (min-width: ${Breakpoints.MOBILE_L}) {
    margin-left: 10px;
    font-size: 0.875rem;
    position: relative;
    top: -2px;
  }
  @media (min-width: ${Breakpoints.TABLET_L}) {
    font-size: 1rem;
  }
`;

export const Text = styled("div")<UserComment.TextBlock>`
  ${(props) => `
  visibility: ${props.editing ? "hidden" : "visible"};
  position: ${props.editing ? "absolute" : "relative"};`}
  font-size: 0.75rem;
  word-break: break-word;
  margin-top: 8px;
  @media (min-width: ${Breakpoints.MOBILE_L}) {
    font-size: 0.875rem;
    margin: 8px 0;
  }
  @media (min-width: ${Breakpoints.TABLET_L}) {
    font-size: 1.125rem;
  }
`;
