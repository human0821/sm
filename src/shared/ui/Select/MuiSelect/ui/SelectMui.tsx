import type { MuiSelect } from "../types";
import type { SelectChangeEvent, SelectProps } from "@mui/material";

import { Box, Checkbox, FormHelperText, MenuItem, Radio, Select, Stack } from "@mui/material";
import { forwardRef, useEffect, useState } from "react";

import { mediaQueryHelp } from "@/app/styles/functions";
import { ChevronSelectIcon } from "@/assets/icons";

import { Label } from "../../Select.styled";

const modeAll = "all-options-mode";

export const SelectMui = forwardRef(
  (
    {
      placeholder,
      helperText,
      label,
      value,
      multipleAll,
      options,
      ...selectProps
    }: MuiSelect & SelectProps<string | string[]>,
    ref,
  ) => {
    const [_value, setValue] = useState(
      selectProps.defaultValue || value || (selectProps.multiple ? ([] as string[]) : ""),
    );

    const isAll = selectProps.multiple && options?.length === _value.length;

    useEffect(() => {
      if (value !== undefined) setValue(value);
    }, [value]);

    return (
      <Box sx={{ position: "relative" }}>
        <Label sx={{ position: "absolute" }}>{label}</Label>
        <Select
          fullWidth
          IconComponent={ChevronSelectIcon}
          renderValue={(value) => {
            return (options?.filter((x) => value.includes(`${x.value}`)) || []).map((x) => x.name).join(", ");
          }}
          value={_value}
          {...selectProps}
          onChange={(event: SelectChangeEvent<string | string[]>, y) => {
            if (event.target.value.includes(modeAll)) {
              const value = (isAll ? [] : options?.map((item) => item.value)) as string[];
              event.target.value = value;
            }
            selectProps.onChange?.(event, y);
            setValue(() => {
              if (typeof event === "string") return (event as string).split(",");
              return event.target.value;
            });
          }}
          ref={ref}
          displayEmpty={true}
          sx={{
            "& .MuiSelect-select .notranslate::after": placeholder
              ? {
                  content: `"${placeholder}"`,
                  opacity: 0.42,
                }
              : {},
            ...selectProps.sx,
          }}>
          {multipleAll && selectProps.multiple && (
            <MenuItem value={modeAll}>
              <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} width={"100%"}>
                <Box sx={mediaQueryHelp({ fontSize: ["0.875rem", "1rem", "1rem", "1.125rem"] })}>Все</Box>
                <span>
                  <Checkbox checked={isAll} />
                </span>
              </Stack>
            </MenuItem>
          )}
          {options
            ? options.map((x) => (
                <MenuItem key={x.value} value={x.value}>
                  <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} width={"100%"}>
                    <Box sx={mediaQueryHelp({ fontSize: ["0.875rem", "1rem", "1rem", "1.125rem"] })}>{x.name}</Box>
                    <span>
                      {selectProps.multiple ? (
                        <Checkbox checked={_value.includes(`${x.value}`)} />
                      ) : (
                        <Radio checked={_value.includes(`${x.value}`)} />
                      )}
                    </span>
                  </Stack>
                </MenuItem>
              ))
            : selectProps.children}
        </Select>
        <FormHelperText error={selectProps.error} sx={{ position: "absolute", left: 0 }}>
          {helperText}
        </FormHelperText>
      </Box>
    );
  },
);
