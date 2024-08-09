declare namespace TextareaContainer {
  interface Textarea {
    height: number;
  }
  interface ContainerState {
    value: string;
    anonymous: boolean;
  }
  interface Container {
    value: string;
    checked?: boolean;
    disabled?: boolean;
    focus?: boolean;
    height: number;
    placeholder: string;
    switchText: string;
    onSend?: (state: ContainerState) => void;
    onEditingSave?: (text: string) => void;
    onEditingCancel?: () => void;
    onChange?: (value: string) => void;
    onSwitchChange?: (value: boolean) => void;
  }
}
