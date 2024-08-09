import { Typography } from "@mui/material";

import { SuggestContent, SuggestWrapper } from "./Suggest.styled";

export const Suggest = ({ children, title, ...props }: Suggest) => (
  <SuggestWrapper {...props}>
    <Typography>{title}</Typography>
    <SuggestContent>{children}</SuggestContent>
  </SuggestWrapper>
);
