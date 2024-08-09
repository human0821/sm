import { Button, styled } from "@mui/material";

import { rotateAnimation } from "@/app/styles/animations";
import { LoaderIcon } from "@/assets/icons";

export const ButtonLoading = styled(Button)<{ loading?: number }>`
  pointer-events: ${(props) => props.loading && "none"};
`;

export const Loader = styled(LoaderIcon)<{ size?: number }>`
  ${({ size }) => (size ? `width: ${size}px; height: ${size}px;` : "")}
  animation: ${rotateAnimation} 2s linear infinite;
`;
