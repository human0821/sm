import type { ReactNode } from "react";

import { LayoutHeaderButtonContent, LayoutHeaderButtonCount, LayoutHeaderButtonWrapper } from "./LayoutHeaderButton.styled";

export function LayoutHeaderButton(props: { count?: number; children?: ReactNode }) {
  return (
    <LayoutHeaderButtonWrapper>
      <LayoutHeaderButtonContent>
        {props.children}
        {!!props.count && <LayoutHeaderButtonCount>{Math.min(props.count, 99)}</LayoutHeaderButtonCount>}
      </LayoutHeaderButtonContent>
    </LayoutHeaderButtonWrapper>
  );
}
