import { styled } from "@mui/material";

export const TabsContainer = styled("div")<{ maxWidth?: number }>`
  flex: 1;
  ${(props) => typeof props.maxWidth === "number" && `max-width: ${props.maxWidth}px`};
`;
