interface DatePickerTimeField {
  hour: number | "";
  setHour: (value: number) => void;

  minute: number | "";
  setMinute: (value: number) => void;

  withTime?: boolean;
  children?: React.ReactNode;
}
