import { styled } from "@mui/material";

import { Colors } from "@/app/styles";
import { mediaQueryHelp } from "@/app/styles/functions";

export const SuggestWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: start !important;
  gap: 8px;
  overflow: hidden;
  padding: 10px 0;

  & > p {
    font-size: 0.875rem;
    line-height: 0.875rem;
    white-space: nowrap;
    text-overflow: ellipsis;

    ${mediaQueryHelp({
      fontSize: { s: "1rem" },
      lineHeight: { s: "1rem" },
    })}
  }
`;
export const SuggestContent = styled("div")`
  display: flex;
  gap: 10px;
  & > p {
    font-size: 0.75rem;
    line-height: 0.75rem;
    color: ${Colors.GREY_MAIN};
    white-space: nowrap;
    text-overflow: ellipsis;
    ${mediaQueryHelp({
      fontSize: { m: "0.875rem" },
      lineHeight: { m: "0.875rem" },
    })}
  }
`;
