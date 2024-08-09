import { styled } from "@mui/material";

export const SurveyInputForm = styled("form")`
  display: flex;
  flex-direction: column;
  & > div:nth-of-type(1) > div:nth-of-type(1) {
    border: 1px solid ${(props) => props.theme.palette.primary.main}40;
  }
`;

export const SurveyInputSwitch = styled("div")`
  display: flex;
  align-items: center;
  padding: 28px 0 8px;
`;

export const SurveyInputSwitchText = styled("div")`
  font-size: 0.875rem;
  margin-left: 10px;
`;
