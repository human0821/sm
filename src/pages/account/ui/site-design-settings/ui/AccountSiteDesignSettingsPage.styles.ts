import { Button, styled } from "@mui/material";

import { Breakpoints } from "@/app/styles";

export const WrapDesignSettings = styled("div")<{ idDesktop?: string; idMobile?: string }>`
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;

  & > div,
  & > form {
    width: 100%;
    max-width: 950px;
  }

  & #${({ idDesktop }) => idDesktop} {
    display: none;
  }

  & #${({ idMobile }) => idMobile} {
    width: 100%;
    max-width: 950px;
  }

  @media (min-width: ${Breakpoints.DESKTOP}) {
    flex-wrap: nowrap;

    & > div,
    & > form {
      width: 50%;
      max-width: none;
    }

    & #${({ idDesktop }) => idDesktop} {
      display: block;
    }

    & #${({ idMobile }) => idMobile} {
      display: none;
      width: 100%;
      max-width: 950px;
    }
  }
`;

export const WrapPreviewButton = styled(Button)`
  margin-top: 20px;
  pointer-events: all;
  flex-grow: 1;
`;

export const FlexBoxPreviewButton = styled("div")<{ isPreview?: boolean }>`
  cursor: pointer;
  padding: 5px 20px;
  gap: 20px;
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: row;
  justify-content: ${({ isPreview }) => (isPreview ? "space-between" : "center")};
  flex-wrap: wrap;
`;
