import { Switch } from "@mui/material";
import { useRef, useState, type FormEvent } from "react";

import { SWITCH_TEXT2 } from "@/features/news/consts/consts";
import InputSend from "@/shared/ui/Input/Send/InputSend";

import { SurveyInputForm, SurveyInputSwitch, SurveyInputSwitchText } from "./SurveyInput.styled";

export function SurveyInput({ onFreeAnswer }: { onFreeAnswer?: (answer: string, isAnonymous: boolean) => any }) {
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [value, setValue] = useState("");
  const surveyField = useRef<HTMLInputElement>();
  const trimmedValue = value.trim();

  const handleChange = (event: any) => {
    setValue(event.currentTarget.value);
  };

  const handleSend = (event: FormEvent) => {
    event.preventDefault();
    const answer = trimmedValue;
    if (answer.length > 0) {
      if (onFreeAnswer) {
        onFreeAnswer(answer, isAnonymous);
      }
    }
  };

  return (
    <SurveyInputForm onSubmit={handleSend}>
      <InputSend
        disableSend={trimmedValue === ""}
        value={value}
        onChange={handleChange}
        inputRef={surveyField}
        name="survey-field"
        color="primary"
        placeholder="Свой ответ"
        loading={Number(false)}
      />
      <SurveyInputSwitch>
        <Switch onChange={() => setIsAnonymous(!isAnonymous)} />
        <SurveyInputSwitchText>{SWITCH_TEXT2}</SurveyInputSwitchText>
      </SurveyInputSwitch>
    </SurveyInputForm>
  );
}
