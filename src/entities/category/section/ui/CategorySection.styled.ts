import { styled } from "@mui/material";

import { mediaQueryHelp } from "@/app/styles/functions";

export const SectionWrapper = styled("div")<{ reverse: CategorySection["reverse"] }>`
  display: grid;
  gap: 8px;
  grid-template-columns: 1fr;
  margin-top: 20px;

  ${({ reverse }) =>
    mediaQueryHelp({
      gap: { s: "16px", m: "20px" },
      gridTemplateAreas: {
        m: reverse
          ? `"сat1 сat1 сat1 сat2 сat2"
             "сat3 сat3 сat4 сat4 сat4"
             "сat5 сat5 сat5 сat6 сat6"
             "сat7 сat7 сat8 сat8 сat8"
             "сat9 сat9 сat9 сat10 сat10"
             "сat11 сat11 сat12 сat12 сat12"
             "сat13 сat13 сat13 сat14 сat14"
             "сat15 сat15 сat16 сat16 сat16"`
          : `"сat1 сat1 сat2 сat2 сat2"
             "сat3 сat3 сat3 сat4 сat4"
             "сat5 сat5 сat6 сat6 сat6"
             "сat7 сat7 сat7 сat8 сat8"
             "сat9 сat9 сat10 сat10 сat10"
             "сat11 сat11 сat11 сat12 сat12"
             "сat13 сat13 сat14 сat14 сat14"
             "сat15 сat15 сat15 сat16 сat16"`,
        l: reverse
          ? `"сat1 сat1 сat1 сat1 сat2 сat2 сat2"
             "сat3 сat3 сat3 сat4 сat4 сat4 сat4"
             "сat5 сat5 сat5 сat5 сat6 сat6 сat6"
             "сat7 сat7 сat7 сat8 сat8 сat8 сat8"
             "сat9 сat9 сat9 сat9 сat10 сat10 сat10"
             "сat11 сat11 сat11 сat12 сat12 сat12 сat12"
             "сat13 сat13 сat13 сat13 сat14 сat14 сat14"
             "сat15 сat15 сat15 сat16 сat16 сat16 сat16"`
          : `"сat1 сat1 сat1 сat2 сat2 сat2 сat2"
             "сat3 сat3 сat3 сat3 сat4 сat4 сat4"
             "сat5 сat5 сat5 сat6 сat6 сat6 сat6"
             "сat7 сat7 сat7 сat7 сat8 сat8 сat8"
             "сat9 сat9 сat9 сat10 сat10 сat10 сat10"
             "сat11 сat11 сat11 сat11 сat12 сat12 сat12"
             "сat13 сat13 сat13 сat14 сat14 сat14 сat14"
             "сat15 сat15 сat15 сat15 сat16 сat16 сat16"`,
        xl: reverse
          ? `"сat1 сat1 сat1 сat1 сat2 сat2 сat3 сat3"
             "сat4 сat4 сat5 сat5 сat5 сat5 сat6 сat6"
             "сat7 сat7 сat7 сat7 сat8 сat8 сat9 сat9"
             "сat10 сat10 сat11 сat11 сat11 сat11 сat12 сat12"
             "сat13 сat13 сat13 сat13 сat14 сat14 сat15 сat15"
             "сat16 сat16 . . . . . ."`
          : `"сat1 сat1 сat2 сat2 сat2 сat2 сat3 сat3"
             "сat4 сat4 сat4 сat4 сat5 сat5 сat6 сat6"
             "сat7 сat7 сat8 сat8 сat8 сat8 сat9 сat9"
             "сat10 сat10 сat10 сat10 сat11 сat11 сat12 сat12"
             "сat13 сat13 сat14 сat14 сat15 сat15 сat15 сat15"
             "сat16 сat16 сat16 сat16 . . . ."`,
        xxl: reverse
          ? `"сat1 сat1 сat2 сat2 сat2 сat3 сat3 сat4 сat4 сat4"
             "сat5 сat5 сat5 сat6 сat6 сat7 сat7 сat7 сat8 сat8"
             "сat9 сat9 сat10 сat10 сat10 сat11 сat11 сat12 сat12 сat12"
             "сat13 сat13 сat13 сat14 сat14 сat15 сat15 сat15 сat16 сat16"`
          : `"сat1 сat1 сat1 сat2 сat2 сat3 сat3 сat3 сat4 сat4"
             "сat5 сat5 сat6 сat6 сat6 сat7 сat7 сat8 сat8 сat8"
             "сat9 сat9 сat9 сat10 сat10 сat11 сat11 сat11 сat12 сat12"
             "сat13 сat13 сat14 сat14 сat14 сat15 сat15 сat16 сat16 сat16"`,
      },
      gridTemplateColumns: {
        s: "repeat(2, 1fr)",
        m: "repeat(5, 1fr)",
        l: "repeat(7, 1fr)",
        xl: "repeat(8, 1fr)",
        xxl: "repeat(10, 1fr)",
      },
    })}
`;
