import styled from "styled-components";

import { Colors } from "@/app/styles";

export const PlaceholderCoverWrap = styled.div<{ opacity?: boolean }>`
  inset: 0;
  flex-grow: 1;
  font-size: clamp(16px, 1.5vw, 32px);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ opacity }) => (opacity ? Colors.GREY_MAIN : "currentColor")};
`;
