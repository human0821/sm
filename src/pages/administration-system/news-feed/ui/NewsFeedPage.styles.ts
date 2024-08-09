import { styled } from "@mui/material";

import { mediaQueryHelp } from "@/app/styles/functions";

export const NewsFeedSearchBlock = styled("div")`
  display: flex;
  gap: 16px;
  align-items: center;
  text-wrap: nowrap;
  ${mediaQueryHelp({ flexWrap: { xs: "wrap", s: "nowrap" } })};

  & .MuiTextField-root {
    ${mediaQueryHelp({ flexGrow: { xs: 1 }, minHeight: { xs: "48px", s: "56px", m: "64px" } })}
  }
`;

export const RolesAndDateWrap = styled("div")`
  display: grid;
  gap: 16px;
  margin-top: 16px;

  ${mediaQueryHelp({
    gridTemplateColumns: { xs: "repeat(2, minmax(100px, 1fr))", l: "repeat(4, minmax(100px, 1fr))" },
  })};
`;
