import { styled } from "@mui/material";

import { mediaQueryHelp } from "@/app/styles/functions";

export const CasesWrapper = styled("div")`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;

  ${mediaQueryHelp({ gridTemplateColumns: { m: "repeat(2, 1fr)", xxl: "repeat(4, 1fr)" }, gap: { xxl: "40px 20px" } })}
`;

export const CaseItem = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
