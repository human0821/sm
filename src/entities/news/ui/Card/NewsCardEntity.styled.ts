import { Stack, styled } from "@mui/material";

import { Breakpoints } from "@/app/styles";
import { textRowsEllipsis } from "@/app/styles/mixins";

export const NewsCardWrapper = styled(Stack)`
  padding: 20px;
  background-color: ${({ theme }) => theme.palette.background.paper};
  border-radius: 20px;
  row-gap: 20px;
`;

export const NewsCardCategories = styled("div")`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
`;

export const NewsCardTitle = styled("div")`
  font-size: 1rem;
  line-height: 1.6875rem;
  word-break: break-word;
  & > a {
    color: inherit;
    font-size: inherit;
    text-decoration: none;
    ${textRowsEllipsis(4, "108px")}
    &:hover {
      text-decoration: underline;
    }
  }
  @media (min-width: ${Breakpoints.MOBILE_L}) {
    font-size: 1.125rem;
  }
`;

export const NewsCardFooter = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NewsCardDate = styled("div")`
  font-size: 0.875rem;
  line-height: 1.3125rem;
`;
