import { styled } from "@mui/material";
import { motion } from "framer-motion";

import { mediaQueryHelp, rgba } from "@/app/styles/functions";

export const MainLayoutWrapper = styled("div")<{ $isEditDesign: boolean }>`
  flex: 1;
  display: flex;
  pointer-events: ${({ $isEditDesign }) => ($isEditDesign ? "none" : "auto")};
  flex-direction: column;
`;

export const MainLayoutContent = styled("div")`
  flex: 1;
  display: flex;
`;

export const MainLayoutMain = styled("main")`
  flex: 1;
  margin-top: 60px;
  max-width: 100%;
  padding: 10px;
  overflow: hidden;
  ${mediaQueryHelp({
    padding: { s: "24px", xxl: "30px" },
    marginTop: { xl: "0" },
  })}
`;

export const MainLayoutHeader = styled("div")`
  height: 80px;
  position: relative;
  z-index: 99;
`;

export const MainLayoutMenu = styled(motion.div)`
  width: 266px;
`;

export const MainLayoutNews = styled(motion.div)<{ isDashboard?: boolean }>`
  overflow: hidden;
  position: relative;
  top: ${(props) => props.isDashboard && "48px"};
  ${mediaQueryHelp({ top: { xl: "0px" } })}
`;

export const MainLayoutMenuBackdrop = styled("div")`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => rgba(theme.palette.primary.main, 0.6)};
  z-index: 9;
`;

export const LayoutMenuMobile = styled(motion.div)`
  position: fixed;
  z-index: 99999;
`;
