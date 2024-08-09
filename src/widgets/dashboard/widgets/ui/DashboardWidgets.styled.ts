import { styled } from "@mui/material";

import { mediaQueryHelp } from "@/app/styles/functions";

export const DashboardWidgetsWrapper = styled("div")`
  display: grid;
  grid-template-areas: ${`"item1 item1"
                          "item1 item1"
                          "item2 item2"
                          "item2 item2"
                          "item3 item3"
                          "item3 item3"
                          "item3 item3"
                          "item4 item4"
                          "item4 item4"
                          "item4 item4"
                          "item5 item5"
                          "item5 item5"
                          "item6 item6"
                          "item6 item6"
                          "item7 item7"
                          "item7 item7"
                          "item8 item8"
                          "item8 item8"
                          "item9 item9"
                          "item9 item9"`};
  grid-template-columns: 1fr;
  grid-template-rows: repeat(20, 68px);
  gap: 16px;

  ${mediaQueryHelp({
    gridTemplateAreas: {
      s: `"item1 item1 item2 item2"
          "item3 item3 item4 item4"
          "item3 item3 item4 item4"
          "item5 item5 item6 item6"
          "item7 item7 item7 item7"
          "item8 item8 item8 item8"
          "item9 item9 item9 item9"`,
      m: `"item1 item1 item2 item2"
          "item3 item3 item4 item4"
          "item3 item3 item4 item4"
          "item5 item5 item6 item6"
          "item7 item7 item8 item8"
          "item9 item9 item9 item9"`,
      l: `"item1 item1 item2 item2"
          "item3 item3 item2 item2"
          "item4 item4 item5 item5"
          "item4 item4 item6 item6"
          "item7 item7 item8 item8"
          "item9 item9 item9 item9"`,
      xxl: `"item1 item1 item1 item2 item2 item3 item3"
            "item4 item4 item4 item2 item2 item3 item3"
            "item5 item5 item5 item6 item6 item7 item7"
            "item8 item8 item8 item8 item8 item9 item9"`,
    },
    gridTemplateColumns: { s: "repeat(4, 1fr)", xxl: "repeat(7, 1fr)" },
    gridTemplateRows: { s: "repeat(7, 150px)", m: "repeat(6, 180px)", xxl: "repeat(4, 225px)" },
  })}
`;
