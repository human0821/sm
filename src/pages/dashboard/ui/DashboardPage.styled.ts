import { styled } from "@mui/material";
import { motion } from "framer-motion";

import { mediaQueryHelp } from "@/app/styles/functions";

export const DashboardPageBannerMotion = styled(motion.div)`
  overflow: hidden;
`;

export const DashboardPageBannerWrapper = styled("div")`
  height: 250px;
  padding-bottom: 16px;
  ${mediaQueryHelp({
    paddingBottom: { xxl: "20px" },
    height: { s: "400px", xxl: "520px !important" },
  })}
`;
