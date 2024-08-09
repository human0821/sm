import { styled } from "@mui/material";

import Colors from "@/app/styles/colors";
import Fonts from "@/app/styles/fonts";
import { textEllipsis } from "@/app/styles/mixins";

export const TagWrapper = styled("div")<{ isImportant?: boolean; size: Tag["size"] }>`
  display: flex;
  align-items: center;
  column-gap: 6px;
  max-width: 100%;
  box-sizing: border-box;
  border-radius: 6px;
  padding: ${({ size }) => (size === "medium" ? "3px" : "5px")} 10px;
  font-size: 0.875rem;
  line-height: 1rem;
  font-family: ${Fonts.ROCK_STAR_SEMIBOLD};
  color: ${(props) => (props.isImportant ? props.theme.palette.primary.main : props.theme.palette.background.default)};
  background-color: ${(props) => (props.isImportant ? Colors.YELLOW_MAIN : props.theme.palette.primary.main)};
  & > span {
    ${textEllipsis()}
  }
`;
