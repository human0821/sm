import { styled, Box } from "@mui/material";

import { Transitions } from "@/app/styles";

export const CardWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: clamp(20px, 1.5vw, 30px);
  background: ${({ theme }) => theme.palette.background.paper};
  border-radius: 20px;
  transition: all ${Transitions.MEDIUM};
`;
