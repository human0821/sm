import { styled } from "@mui/material";

import Colors from "@/app/styles/colors";
import { iconSize } from "@/app/styles/mixins";

import { StatusesList } from "./consts";

export const StatusWrapper = styled("div")<{ status: StatusesList }>`
  display: flex;
  align-items: center;
  column-gap: 10px;
  font-size: 0;
  line-height: 0;
  ${iconSize(24)}
  height: 24px;
  & > span {
    font-size: 1.125rem;
    line-height: 1;
  }
  ${(props) => {
    switch (props.status) {
      case StatusesList.SUCCESS:
        return `color: ${Colors.GREEN_MAIN}`;
      case StatusesList.ERROR:
        return `color: ${Colors.RED_MAIN}`;
    }
  }}
`;
