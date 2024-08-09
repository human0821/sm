import { styled } from "@mui/material";

import { BlockCardEntity } from "@/entities/block";

export const Grid = styled("div")<{ variant?: "default" | "second" }>`
  display: grid;
  grid-auto-flow: dense;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: minmax(400px, auto);
  gap: 16px;
  ${(props) => props.theme.breakpoints.up("xl")} {
    grid-template-columns: ${(props) => (props.variant === "second" ? "1fr 1fr 27%" : "1fr 27% 1fr")};
    gap: 20px;
  }
`;

export const Card = styled(BlockCardEntity)<{ order?: number; colSpan?: number }>`
  ${(props) => `
    grid-row-end: span ${props.colSpan};
    order: ${props.order}
  `}
`;
