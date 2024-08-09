import { styled } from "@mui/material";

import { Breakpoints, Colors, Fonts } from "@/app/styles";

export const Wrapper = styled("div")`
  font: 1.7rem ${Fonts.ROCK_STAR_SEMIBOLD};
  width: 100%;
`;
export const CommentsLenth = styled("div")`
  font-size: 1.125rem;
  margin: 20px 0;
  margin-top: 35px;
  & span:last-child {
    color: ${({ theme }) => theme.palette.secondary.main};
  }
  @media (min-width: ${Breakpoints.MOBILE_L}) {
    font-size: 1.5rem;
  }
  @media (min-width: ${Breakpoints.TABLET}) {
    font-size: 1.5rem;
    margin-top: 65px;
  }
  @media (min-width: ${Breakpoints.TABLET_L}) {
    font-size: 2rem;
  }
`;
export const Comments = styled("div")`
  font-family: ${Fonts.GEOLOGICA_REGULAR};
  font-size: 0.7rem;
  line-height: 1.47;
  margin: 30px 0;
`;
export const Hide = styled("div")`
  height: 40px;
  margin-top: 35px;
  font-size: 0.875rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-top: 2px solid ${Colors.GREY_PALE};
  color: ${({ theme }) => theme.palette.secondary.main};
  user-select: none;
  @media (min-width: ${Breakpoints.MOBILE_L}) {
    font-size: 1.125rem;
  }
`;
