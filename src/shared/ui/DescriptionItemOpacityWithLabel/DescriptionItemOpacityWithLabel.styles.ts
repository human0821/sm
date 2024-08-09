import { lighten, styled } from "@mui/material";

export const DescriptionItemWrap = styled("div")`
  font-size: 1rem;
  color: ${({ theme }) => lighten(theme.palette.text.primary, 0.45)};
`;
