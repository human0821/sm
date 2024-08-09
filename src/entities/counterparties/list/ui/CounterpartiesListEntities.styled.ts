import { styled } from "@mui/material";

export const ListWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 20px 0;
  width: 100%;
`;

export const ListCardsWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

export const EmptyWrapper = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 80px - 40px - 300px);
`;
