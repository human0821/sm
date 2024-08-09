import { styled } from "@mui/material";

import { mediaQueryHelp } from "@/app/styles/functions";

export const Wrapper = styled("div")<{ position: Pagination["position"] }>`
  margin: 20px 0;
  ${({ position }) => (position === "center" ? "width: 100%; display: flex; justify-content: center;" : "")}
  a {
    font-size: 0.75rem;
    ${mediaQueryHelp({ fontSize: { s: "0.9375rem", l: "1.125rem", xxl: "1.5rem" } })}
  }
`;
