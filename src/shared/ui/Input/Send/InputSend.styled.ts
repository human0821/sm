import { styled } from "@mui/material";

import { SendIcon as Icon } from "@/assets/icons";

export const SendIcon = styled(Icon)`
  color: ${({ theme }) => theme.palette.primary.main};
`;
