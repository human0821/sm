import { Typography, styled } from "@mui/material";

export const InfoWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
`;

export const InfoAvatarUploader = styled("div")`
  height: 250px;
`;

export const InfoName = styled(Typography)`
  line-height: 1;
`;

export const InfoList = styled("div")`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

export const InfoListItem = styled("div")`
  display: flex;
  align-items: center;
  column-gap: 10px;
  font-size: 1.125rem;
  line-height: 1;
  & > svg {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
  }
`;
