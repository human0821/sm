interface SwitchWithLabel {
  label: string;
  onChange?: (x: boolean) => void;
  checked?: boolean;
}
