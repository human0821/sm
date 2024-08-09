import { Modal, styled } from "@mui/material";

import { mediaQueryHelp } from "@/app/styles/functions";

export const ModalWrapper = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
  padding: 40px 0;
`;

export const ModalCard = styled("div")`
  position: relative;
  margin: auto;
  border-radius: 20px;
  ${mediaQueryHelp({ borderRadius: { s: "30px" } })}
  background-color: ${({ theme }) => theme.palette.background.default};
  border: 1px solid ${({ theme }) => theme.palette.background.paper};
  outline: none;
`;
