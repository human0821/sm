import { styled } from "@mui/material";

import { Breakpoints, Colors, Fonts, Transitions } from "@/app/styles";

export const LoaderWrapper = styled("div")`
  height: 0;
  position: relative;
  top: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PageWrapper = styled("div")`
  display: flex;
  gap: 20px;
`;

export const LeftWrapper = styled("div")`
  flex: 1;
`;

export const RightWrapper = styled("div")`
  display: none;
  @media (min-width: ${Breakpoints.TABLET_L}) {
    display: block;
  }
  width: 352px;
  @media (min-width: ${Breakpoints.DESKTOP_L}) {
    width: 464px;
  }
`;

export const Wrapper = styled("div")``;

export const ImageWrapper = styled("div")`
  margin: 20px 0;
  img {
    border-radius: 20px;
    max-width: 100%;
  }
`;

export const BannerWrapper = styled("div")`
  height: 200px;
  border-radius: 20px;
  overflow: hidden;
  margin-bottom: 38px;
  transition: height ${Transitions.MEDIUM} ease;
  @media (min-width: ${Breakpoints.MOBILE_L}) {
    height: 245px;
  }
  @media (min-width: ${Breakpoints.TABLET}) {
    height: 296px;
  }
  @media (min-width: ${Breakpoints.TABLET_L}) {
    height: 340px;
  }
  @media (min-width: ${Breakpoints.DESKTOP}) {
    height: 397px;
  }
`;

export const HeadWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 20px;
  gap: 15px;
  @media (min-width: ${Breakpoints.MOBILE_L}) {
    flex-direction: row;
  }
  margin-top: 35px;
  position: relative;
  top: -4px;
`;
export const RolesWrapper = styled("div")`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  gap: 10px;
`;
export const Role = styled("div")`
  &[id="important"] {
    background-color: ${Colors.YELLOW_MAIN};
    color: ${({ theme }) => theme.palette.primary.main};
  }
  display: inline-flex;
  border-radius: 5px;
  padding: 5px 10px;
  white-space: nowrap;
  word-wrap: break-word;
  cursor: pointer;
  font: 0.75rem ${Fonts.ROCK_STAR_SEMIBOLD};
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.background.default};
  line-height: 1rem;
  @media (min-width: ${Breakpoints.MOBILE_L}) {
    font-size: 0.875rem;
  }
`;
export const Date = styled("div")`
  position: relative;
  top: 3px;
  display: inline-flex;
  color: ${({ theme }) => theme.palette.secondary.main};
  font: 0.875rem ${Fonts.ROCK_STAR_SEMIBOLD};
  @media (min-width: ${Breakpoints.TABLET}) {
    font-size: 1.125rem;
  }
`;

export const Header = styled("div")`
  word-break: break-word;
  margin: 20px 0;
  font: 1.125rem ${Fonts.ROCK_STAR_SEMIBOLD};
  @media (min-width: ${Breakpoints.MOBILE_L}) {
    font-size: 1.25rem;
  }
  @media (min-width: ${Breakpoints.TABLET}) {
    font-size: 1.5rem;
  }
  @media (min-width: ${Breakpoints.TABLET_L}) {
    font-size: 2rem;
  }
`;
export const Text = styled("div")`
  line-height: 1.4;
  word-break: break-word;
  font-size: 0.75rem;
  margin-bottom: 20px;
  img {
    max-width: 100%;
    display: flex;
    border-radius: 20px;
    margin: 25px auto;
  }
  a {
    color: ${Colors.NEWS_LINK};
    text-decoration: underline;
  }
  @media (min-width: ${Breakpoints.MOBILE_L}) {
    font-size: 0.875rem;
  }
  @media (min-width: ${Breakpoints.TABLET_L}) {
    font-size: 1.125rem;
  }
`;

export const Anchor = styled("section")`
  transform: translateY(-50px);
`;
