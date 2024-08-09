import { styled } from "@mui/material";

import { Transitions } from "@/app/styles";

export const AccordionArrowWrap = styled("div")<{ isExpanded: boolean }>`
  transition: transform ${Transitions.MEDIUM};
  transform: rotate(${(props) => (props.isExpanded ? "180deg" : "0deg")});
`;
