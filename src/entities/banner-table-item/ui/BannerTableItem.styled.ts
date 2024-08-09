import { styled } from "@mui/material";

import { Functions, Mixins, Transitions } from "@/app/styles";

export const ImageTable = styled("div")`
  position: relative;
  height: 67px;
  ${Functions.mediaQueryHelp({ height: { xl: "84px", xxl: "100px" } })};
  border-radius: 10px;
  overflow: hidden;

  &:nth-child(3) {
    display: none;
  }
`;

export const ButtonsWrapper = styled("div")`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

export const BannerVideoWrapper = styled("div")`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BannerVideoPreview = styled("video")`
  max-width: 100%;
  max-height: 100%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  position: absolute;
`;

export const BannerPlay = styled("button")`
  ${Mixins.buttonClear()}
  z-index: 2;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.palette.background.default}50;
  transition: background-color ${Transitions.SMALL};
  width: 50px;
  height: 50px;

  & > svg {
    width: 28px;
    height: 28px;
  }
`;
