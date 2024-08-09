import { styled } from "@mui/material";
import { motion } from "framer-motion";

import { LogoIcon } from "@/assets/icons";

export const Main = styled("div")`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 64px 0 160px;
`;

export const Background = styled("div")`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  filter: blur(4px);
  body.n-webp & {
    background-image: url("/images/auth/auth-bg.png");
  }
  body.y-webp & {
    background-image: url("/images/auth/auth-bg.webp");
  }
`;

export const Wrapper = styled(motion.div)`
  position: relative;
  padding: 24px 40px 40px;
  border-radius: 40px;
  box-shadow: none;
  background-color: ${({ theme }) => theme.palette.background.default};
  max-width: 500px;
  width: 100%;
  min-height: 544px;
  display: flex;
  flex-direction: column;
  row-gap: 40px;
  overflow: visible;
`;

export const Logo = styled(LogoIcon)`
  position: absolute;
  bottom: 40px;
  width: 60px;
  height: 60px;
  ${(props) => props.theme.breakpoints.up("xl")} {
    width: 80px;
    height: 80px;
  }
`;
