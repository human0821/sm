import { Box, Stack, Typography } from "@mui/material";

import { DatePickerTimeFieldWrap, DatePickerTimeTextField } from "./DatePickerTimeField.styled";
import { Flex } from "../../Flex";

export function DatePickerTimeField({ hour, minute, setHour, setMinute, children, withTime }: DatePickerTimeField) {
  return (
    <DatePickerTimeFieldWrap>
      <Stack>
        <Box mb={"10px"}>{children}</Box>

        {withTime && (
          <Stack gap="16px">
            <Typography fontSize={"1.125rem"}>Время</Typography>
            <Flex gap={"8px"}>
              <DatePickerTimeTextField
                placeholder="Часы"
                value={hour}
                onChange={(e) => {
                  if (/\d*/.test(e.target.value)) {
                    const _hour = Math.min(23, +e.target.value);
                    setHour(_hour);
                  }
                }}
              />
              <DatePickerTimeTextField
                placeholder="Минуты"
                value={minute}
                onChange={(e) => {
                  if (/\d*/.test(e.target.value)) {
                    const _minute = Math.min(59, +e.target.value);
                    setMinute(_minute);
                  }
                }}
              />
            </Flex>
          </Stack>
        )}
      </Stack>
    </DatePickerTimeFieldWrap>
  );
}
