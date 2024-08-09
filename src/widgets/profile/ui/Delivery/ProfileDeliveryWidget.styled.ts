import { IconButton, styled } from "@mui/material";

import { Fonts, Mixins } from "@/app/styles";

export const DeliveryWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  border-top: 1px solid ${({ theme }) => theme.palette.background.paper};
  margin-top: 30px;
  padding-top: 30px;
  flex: 1 1 auto;
`;

export const DeliveryHeader = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: -12px;
`;

export const DeliveryList = styled("div")`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  max-height: 340px;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 16px 18px 4px 0;
  margin-right: -18px;
  ${({ theme }) => Mixins.scrollbar({ color: theme.palette.primary.main })}
  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }
  &:hover::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.palette.primary.main};
  }
`;

export const DeliveryEmpty = styled("div")`
  flex: 1 1 auto;
  padding: 60px 0;
`;

export const DeliveryEmptyText = styled("div")`
  font-size: 1.125rem;
  font-family: ${Fonts.ROCK_STAR_SEMIBOLD};
  color: ${({ theme }) => theme.palette.secondary.main};
`;

export const DeliveryActions = styled("div")`
  display: flex;
  column-gap: 4px;
  flex-shrink: 0;
  margin-left: 55px;
  margin-right: -12px;
  margin-top: -8px;
`;

export const DeliveryItemAction = styled(IconButton)`
  color: ${({ theme }) => theme.palette.secondary.main};
  margin-right: -8px;
  svg {
    width: 24px;
    height: 24px;
  }
`;
