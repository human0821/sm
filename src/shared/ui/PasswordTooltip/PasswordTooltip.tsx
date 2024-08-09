import { Tooltip } from "@mui/material";

import { QuestionIcon } from "@/assets/icons";
import { CONTENT_PASSWORD_RULES } from "@/shared/consts/content";

import { QuestionButton } from "./PasswordTooltip.styled";

export const PasswordTooltip = () => {
  return (
    <Tooltip tabIndex={-1} title={CONTENT_PASSWORD_RULES} placement="top-start" enterTouchDelay={0}>
      <QuestionButton disableRipple={true}>
        <QuestionIcon />
      </QuestionButton>
    </Tooltip>
  );
};
