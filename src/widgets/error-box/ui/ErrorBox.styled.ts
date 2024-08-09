import { Button, styled } from "@mui/material";

import { Breakpoints, Fonts } from "@/app/styles";

export const ErrorWrapper = styled("div")`
  margin: 0 auto;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  max-width: 815px;
  font-family: ${Fonts.ROCK_STAR_SEMIBOLD};
`;

export const Code = styled("div")`
  font-size: 5rem;
  line-height: 1.3;
  color: ${({ theme }) => theme.palette.primary.main};

  @media (min-width: ${Breakpoints.MOBILE_L}) {
    font-size: 8rem;
  }
  @media (min-width: ${Breakpoints.TABLET}) {
    font-size: 8.75rem;
  }
  @media (min-width: ${Breakpoints.TABLET_L}) {
    font-size: 10.625rem;
  }
`;

export const Descwrapper = styled("div")`
  margin-bottom: 45px;
`;

export const Title = styled("div")`
  font-size: 1.125rem;

  @media (min-width: ${Breakpoints.MOBILE_L}) {
    font-size: 1.5rem;
  }
  @media (min-width: ${Breakpoints.TABLET}) {
    font-size: 2rem;
  }
  @media (min-width: ${Breakpoints.TABLET_L}) {
    font-size: 2.5rem;
  }
`;
export const Desc = styled("div")`
  margin-top: 8px;
  font-size: 0.875rem;
  line-height: 1.1;
  color: ${({ theme }) => theme.palette.secondary.main};
  font-family: ${Fonts.GEOLOGICA_REGULAR};
  @media (min-width: ${Breakpoints.MOBILE_L}) {
    font-size: 1.125rem;
  }
  @media (min-width: ${Breakpoints.TABLET}) {
    font-size: 1.125rem;
  }
  @media (min-width: ${Breakpoints.TABLET_L}) {
    font-size: 1.5rem;
  }
`;

export const Buttons = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 15px;
  @media (min-width: ${Breakpoints.MOBILE_L}) {
    flex-direction: row;
  }
`;

export const Back = styled(Button)`
  &:hover {
    border: 2px solid ${({ theme }) => theme.palette.primary.main};
  }
  border: 2px solid ${({ theme }) => theme.palette.primary.main};
  font-size: 1.125rem !important;
  flex: 1;
  padding: 11px 20px;
  border-radius: 15px;
  @media (min-width: ${Breakpoints.MOBILE_L}) {
    padding: 15px 20px;
  }
`;
export const Main = styled(Button)`
  border: 2px solid transparent;
  font-size: 1.125rem !important;
  flex: 1;
  padding: 11px 20px;
  border-radius: 15px;
  @media (min-width: ${Breakpoints.MOBILE_L}) {
    padding: 15px 20px;
  }
`;
