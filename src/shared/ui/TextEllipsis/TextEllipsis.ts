import { styled } from "@mui/material";

export const TextEllipsis = styled("span")<{ $lineClamp?: number }>`
  display: -webkit-box;
  -webkit-line-clamp: ${({ $lineClamp = 1 }) => $lineClamp};
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
