import { styled } from "@mui/material";

import { Fonts } from "@/app/styles";
import { mediaQueryHelp } from "@/app/styles/functions";
import { BlockCardEntity } from "@/entities/block";
import { ButtonLoading } from "@/shared/ui/Button/Loading/ButtonLoading";

export const InfoWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 30px;
  min-height: 340px;
  h3,
  h4 {
    font-size: 1rem;
    ${mediaQueryHelp({ fontSize: { s: "1.25rem", l: "1.5rem", xxl: "2rem" } })}
  }
  h4 {
    ${mediaQueryHelp({ fontSize: { xxl: "1.5rem" } })}
  }
`;

export const InfoAccountWrapper = styled(BlockCardEntity)`
  padding-right: 20px;
`;

export const InfoList = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const InfoItem = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const InfoItemKey = styled("div")`
  font-size: 0.875rem;
  line-height: 1.2rem;
  letter-spacing: 0.01em;
  color: ${({ theme }) => theme.palette.secondary.main};
  ${mediaQueryHelp({ fontSize: { s: "1rem", l: "1.125rem" } })}
`;

export const InfoItemValue = styled("div")`
  font-size: 0.875rem;
  line-height: 1rem;
  letter-spacing: 0.01em;
  color: ${({ theme }) => theme.palette.primary.main};
  ${mediaQueryHelp({ fontSize: { s: "1rem", l: "1.125rem" } })}
`;

export const InfoEmptyText = styled("div")`
  font-family: ${Fonts.ROCK_STAR_SEMIBOLD};
  font-size: 0.875rem;
  line-height: 1.625rem;
  text-align: center;
  color: ${({ theme }) => theme.palette.secondary.main};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  ${mediaQueryHelp({ fontSize: { s: "1.125rem", l: "1.25rem" } })}
`;

export const InfoHeader = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

export const InfoAccountButton = styled(ButtonLoading)`
  color: ${({ theme }) => theme.palette.secondary.main};
  font-size: 0.875rem;
  height: 26px;
  padding: 0 10px;
`;
