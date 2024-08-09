import { styled } from "@mui/material";

import { Colors, Mixins, Transitions, Breakpoints } from "@/app/styles";

export const NotificationWrapper = styled("div")`
  display: flex;
  flex-direction: row;
  width: 100%;
  border-radius: 16px;
  background: ${({ theme }) => theme.palette.background.paper};
  padding: 20px;
  height: 93px;

  @media (min-width: ${Breakpoints.MOBILE_L}) {
    height: 103px;
  }

  @media (min-width: ${Breakpoints.TABLET_L}) {
    height: 107px;
  }
`;

export const NotificationContentWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  width: 100%;

  .notification-delete {
    position: relative;
    top: -5px;
    right: -5px;
  }
`;

export const NotificationContent = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 770px;
`;

export const NotificationBlock = styled("div")`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const NotificationText = styled("div")`
  font-size: 0.75rem;
  line-height: 0.825rem;
  color: ${({ theme }) => theme.palette.text.secondary};

  @media (min-width: ${Breakpoints.TABLET}) {
    font-size: 0.875rem;
    line-height: 0.9625rem;
  }
`;

export const Separator = styled("div")`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: ${({ theme }) => theme.palette.text.secondary}60;
`;

export const Message = styled("div")`
  font-size: 0.875rem;
  line-height: 1rem;
  ${Mixins.textRowsEllipsis(2, "2rem")}

  @media (min-width: ${Breakpoints.MOBILE_L}) {
    font-size: 1rem;
    line-height: 1.1rem;
    ${Mixins.textRowsEllipsis(2, "2.2rem")}
  }

  @media (min-width: ${Breakpoints.TABLET_L}) {
    font-size: 1.125rem;
    line-height: 1.2375rem;
    ${Mixins.textRowsEllipsis(2, "2.468rem")}
  }
`;

export const Flag = styled("div")<{ show: boolean }>`
  display: flex;
  align-items: center;
  transition: all ${Transitions.MEDIUM} ease-in-out;

  ${({ show }) =>
    show
      ? `height: 1.2375rem;
     width: 24px;

      &::before {
        transform: scale(1) !important;
      }
  `
      : ""}

  &::before {
    content: "";
    position: relative;
    display: block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${Colors.RED_MAIN};
    transform: scale(0);
    transition: all ${Transitions.MEDIUM} ease-in-out;
  }
`;
