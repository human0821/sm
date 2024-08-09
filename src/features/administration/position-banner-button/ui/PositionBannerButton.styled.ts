import { styled } from "@mui/material";

import { ArrowNavigate } from "@/assets/icons";

export const NumbersWrapper = styled("div")`
  display: grid;
  grid-template-columns: 34px 1fr 34px;
  align-items: center;
`;

export const ButtonsWrapper = styled("div")`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const DecreaseNumber = styled(ArrowNavigate)`
  width: 6px;
  height: 12px;
  transform: rotate(90deg);
`;

export const PositionNumber = styled("div")`
  display: flex;
  justify-content: center;
`;

export const IncreaseNumber = styled(ArrowNavigate)`
  width: 6px;
  height: 12px;
  transform: rotate(-90deg);
`;
