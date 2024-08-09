import { styled } from "@mui/material";

export const LoaderWrapper = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: calc(100vh - 80px - 40px);
  height: 100%;
  position: absolute;
  top: 0;
  background-color: ${({ theme }) => theme.palette.background.default};
`;
