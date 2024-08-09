import { Switch } from "@mui/material";
import { memo, useEffect, useRef, useState } from "react";

import {
  Wrapper,
  SendButton,
  Textarea,
  SwitchText,
  SwitchBottom,
  EditingBottom,
  CancelButton,
  SaveButton,
  SendIcon,
} from "./TextareaContainer.styled";

const TextareaContainer: React.FC<TextareaContainer.Container> = memo(
  ({
    value,
    switchText,
    height,
    placeholder,
    disabled,
    focus,
    onSend,
    onChange,
    onSwitchChange,
    onEditingCancel,
    onEditingSave,
    checked = false,
  }) => {
    const [state, setState] = useState({ value, checked });
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const iconSize = 25;
    const disableButton = (text: string) => text.trim().length === 0 || disabled;
    const sendButtonDisabled = disableButton(state.value);
    const isEditingMode = Boolean(onEditingSave) || Boolean(onEditingCancel);

    useEffect(() => {
      if (focus) {
        textareaRef.current?.focus();
      }
    }, [focus]);

    const send = () => {
      if (onSend) {
        onSend({ value: state.value, anonymous: state.checked });
        setState((state) => ({ ...state, value: "" }));
      }
    };

    const switchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { checked } = event.target;
      setState((state) => ({ ...state, checked }));
      if (onSwitchChange) {
        onSwitchChange(checked);
      }
    };

    const change: React.ChangeEventHandler<HTMLTextAreaElement> = (event) => {
      const { value } = event.target;
      setState((state) => ({ ...state, value }));
      if (onChange) {
        onChange(value);
      }
    };

    const editingCancel = () => {
      if (onEditingCancel) {
        onEditingCancel();
      }
    };

    const editingSave = () => {
      if (onEditingSave) {
        onEditingSave(state.value);
      }
    };

    return (
      <Wrapper editing={isEditingMode}>
        {!isEditingMode && (
          <SendButton onClick={send} disabled={sendButtonDisabled}>
            <SendIcon width={iconSize} disabled={sendButtonDisabled} />
          </SendButton>
        )}
        <Textarea
          value={state.value}
          height={height}
          placeholder={placeholder}
          onChange={change}
          disabled={false}
          ref={textareaRef}
        />
        {isEditingMode && (
          <EditingBottom>
            <CancelButton onClick={editingCancel}>Отменить</CancelButton>
            <SaveButton onClick={editingSave} variant="contained" disabled={sendButtonDisabled}>
              Сохранить
            </SaveButton>
          </EditingBottom>
        )}
        {!isEditingMode && (
          <SwitchBottom>
            <Switch checked={state.checked} onChange={switchChange} />
            <SwitchText>{switchText}</SwitchText>
          </SwitchBottom>
        )}
      </Wrapper>
    );
  },
);

TextareaContainer.displayName = "TextareaContainer";
export { TextareaContainer };
