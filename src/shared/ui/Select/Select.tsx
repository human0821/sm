import {
  MenuItem,
  Checkbox,
  ListItemText,
  OutlinedInput,
  Select as SelectMUI,
  type SelectChangeEvent,
} from "@mui/material";
import { useEffect, useState } from "react";

import { ChevronSelectIcon } from "@/assets/icons";

import { Placeholder, Label, FormControl, Option, OptionText } from "./Select.styled";

const ITEM_HEIGHT = 55;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 5 + ITEM_PADDING_TOP,
      width: 250,
      padding: "0px",
    },
  },
};

const Select = ({
  options,
  multiple,
  placeholder,
  onChange,
  onCustomChange,
  defaultValue,
  label,
  withFormHook,
  ...props
}: Select.Component) => {
  const [selectedValue, setSelectedValue] = useState<string | string[]>([]);
  const [isEmpty, setIsEmpty] = useState(false);

  const handleChange = (event: SelectChangeEvent<typeof selectedValue>) => {
    const {
      target: { value },
    } = event;
    const isString = typeof value === "string";
    let values;
    let empty;

    if (isString) {
      values = JSON.parse(value);
      empty = [];
      setSelectedValue(value);
    } else {
      values = value.map((item) => JSON.parse(item));
      empty = values.filter((item) => item.value === "");

      if (empty.length > 0) {
        if (isEmpty) {
          values = values.filter((item) => item.value !== "");
        } else {
          values = values.filter((item) => item.value === "");
        }
        setSelectedValue(values.map((item) => JSON.stringify(item)));
      } else {
        setSelectedValue(value);
      }
    }

    setIsEmpty(empty?.length > 0);

    if (onCustomChange) {
      onCustomChange(values);
    }
  };

  useEffect(() => {
    if (defaultValue) {
      let value;
      if ((defaultValue as Select.Option)?.name) {
        value = JSON.stringify(defaultValue);
      } else {
        value = (defaultValue as Select.Option[]).map((item) => JSON.stringify(item));
      }
      setSelectedValue(value);
    }
  }, [defaultValue]);

  return (
    <FormControl>
      {label && <Label id="demo-simple-select-disabled-label">{label}</Label>}
      <SelectMUI
        {...props}
        labelId="demo-simple-select-disabled-label"
        displayEmpty
        multiple={multiple}
        input={<OutlinedInput />}
        value={selectedValue}
        onChange={withFormHook ? onChange : handleChange}
        renderValue={(selected) => {
          if (selected.length === 0 && placeholder) {
            return <Placeholder>{placeholder}</Placeholder>;
          } else if (typeof selected === "object") {
            return selected.map((value, index) => {
              const data = JSON.parse(value);
              return `${data.name}${index === selected.length - 1 && index === 0 ? "" : ", "}`;
            });
          } else {
            const data = JSON.parse(selected);
            return data.name;
          }
        }}
        MenuProps={MenuProps}
        IconComponent={ChevronSelectIcon}>
        {placeholder && (
          <MenuItem disabled value="" sx={{ display: "none" }}>
            <Placeholder>{placeholder}</Placeholder>
          </MenuItem>
        )}
        {options.map(({ value, name }) => (
          <Option key={value + name} value={JSON.stringify({ value, name })} title={name}>
            <OptionText>{name}</OptionText>
            {multiple && <Checkbox checked={selectedValue.includes(JSON.stringify({ value, name }))} />}
          </Option>
        ))}
      </SelectMUI>
    </FormControl>
  );
};

export default Select;
