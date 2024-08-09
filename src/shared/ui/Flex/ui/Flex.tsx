import type { StackProps } from "@mui/material";

import { FlexWrap } from "./Flex.styled";

export function Flex({ children, ...props }: Flex & StackProps) {
  return (
    <FlexWrap direction="row" alignItems="center" gap={2} {...props}>
      {children}
    </FlexWrap>
  );
}
