import { styled } from "@mui/material";

import { Breakpoints } from "@/app/styles/breakpoints";

export const Actions = styled("div")<UserComment.ActionsBlock>`
  ${(props) => `
  visibility: ${props.editing ? "hidden" : "visible"};`}
  display: flex;
  align-items: flex-end;
  user-select: none;
  @media (min-width: ${Breakpoints.MOBILE_L}) {
    align-items: center;
  }
`;

export const ReplyLikesWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  @media (min-width: ${Breakpoints.MOBILE_L}) {
    flex-direction: row;
  }
`;

export const Editing = styled("div")`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: flex-end;
`;
