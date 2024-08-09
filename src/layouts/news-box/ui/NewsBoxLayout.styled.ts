import { styled } from "@mui/material";

import { NewsWidgetWidths } from "@/widgets/layout/news";

export const NewsBoxLayoutWrapper = styled("div")`
  display: flex;
`;

export const NewsBoxLayoutOutlet = styled("div")`
  flex: 1;
`;

export const NewsBoxLayoutSidebar = styled("div")<{ hide: boolean }>`
  display: ${(props) => (props.hide ? "none" : "block")};
  margin-top: 40px;
  margin-left: 20px;
  width: ${NewsWidgetWidths.LG_FULL - 10}px;
  ${(props) => `${props.theme.breakpoints.up("xl")} { width: ${NewsWidgetWidths.XL_FULL - 20}px; }`}
`;
