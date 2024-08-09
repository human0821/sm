import { Switch } from "@mui/material";

import { Label, Wrapper } from "./SwitchWithLabel.styled";

export function SwitchWithLabel({ label, onChange, checked }: SwitchWithLabel) {
  return (
    <Wrapper>
      <Label>{label}</Label>
      <Switch onChange={(x) => onChange?.(x.target.checked)} />
    </Wrapper>
  );
}
