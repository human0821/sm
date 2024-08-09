import type {
  DateValidationError,
  DesktopDatePicker as MUIDatePicker,
  PickerChangeHandlerContext,
} from "@mui/x-date-pickers";

import { Box } from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { useRef, useState } from "react";

import { Colors } from "@/app/styles";
import { ArrowNavigate, CalendarIcon } from "@/assets/icons";

import { DatePickerHeader, DatePickerWrap } from "./DatePicker.styled";
import { DatePickerTimeField } from "../DatePickerTimeField";

export function DatePicker({
  placeholder,
  withTime,
  onChange,
  ...props
}: DatePickerProps & Parameters<typeof MUIDatePicker>[0]) {
  const currentDate = useRef<dayjs.Dayjs | null>(null),
    currentContext = useRef<PickerChangeHandlerContext<DateValidationError>>(),
    [hour, setHour] = useState<"" | number>(""),
    [minute, setMinute] = useState<"" | number>("");

  function _onChange(value: dayjs.Dayjs | null, context?: PickerChangeHandlerContext<DateValidationError>) {
    currentDate.current = value;
    currentContext.current = context;
    onChange?.(currentDate.current, context);
  }

  function createCurrentDate() {
    currentDate.current = dayjs(props.value || props.defaultValue);
  }

  return (
    <DatePickerWrap>
      <DesktopDatePicker
        showDaysOutsideCurrentMonth
        dayOfWeekFormatter={(day) => day.format("dd")}
        {...props}
        sx={{ width: "100%", ...props.sx }}
        onChange={onChange}
        slots={{
          //https://github.com/mui/mui-x/issues/10389
          layout: DatePickerTimeField as any,
          openPickerIcon: () => <CalendarIcon color={Colors.BLACK_MAIN} />,
          calendarHeader(props) {
            const date = props.currentMonth.format("MMMM YYYY");
            return (
              <DatePickerHeader gap={1}>
                <ArrowNavigate
                  onClick={() => props.onMonthChange(props.currentMonth.add(-1, "month"), "left")}
                  style={{ transform: "rotate(180deg)" }}
                />
                <Box textAlign={"center"} width={175}>
                  {date}
                </Box>
                <ArrowNavigate onClick={() => props.onMonthChange(props.currentMonth.add(1, "month"), "right")} />
              </DatePickerHeader>
            );
          },
          ...props.slots,
        }}
        slotProps={{
          layout: {
            // @ts-ignore
            withTime,
            hour,
            minute,
            setHour: (x: number) => {
              createCurrentDate();
              _onChange(currentDate.current?.set("hour", x) || null, currentContext.current);
              setHour(x);
            },
            setMinute: (x: number) => {
              createCurrentDate();
              _onChange(currentDate.current?.set("minute", x) || null, currentContext.current);
              setMinute(x);
            },
          },
          textField: { placeholder, ...props.slotProps?.textField },
          popper: {
            sx: {
              "& > .MuiPickersPopper-paper": {
                padding: "20px",
                borderRadius: "20px !important",
                background: Colors.WHITE,
                boxShadow: "none",
                border: `1px solid ${Colors.DIVIDER}`,
              },
            },
          },
          ...props.slotProps,
        }}
      />
    </DatePickerWrap>
  );
}
