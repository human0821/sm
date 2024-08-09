import type { ThemeOptions } from "@mui/material";

import type {} from "@mui/x-date-pickers/themeAugmentation";
import theme from "../theme";

export const MuiDatePicker: ThemeOptions["components"] = {
  MuiPickersPopper: {
    styleOverrides: {
      root: {
        paddingTop: "10px",
      },
    },
  },

  MuiDateCalendar: {
    styleOverrides: {
      root: {
        ".MuiDayCalendar-header": {
          justifyContent: "space-between",

          "& > span": {
            fontSize: "1rem",
            color: theme.palette.text?.primary,
            margin: "15px 0",
          },
        },
        width: "340px",
        minHeight: "400px",

        ".MuiDayCalendar-slideTransition": {
          minHeight: "400px",
        },
      },
    },
  },

  MuiDayCalendar: {
    styleOverrides: {
      root: {},
      weekContainer: {
        justifyContent: "space-between",
        marginBottom: "20px",
      },
    },
  },

  MuiPickersDay: {
    styleOverrides: {
      root: {
        flexShrink: 0,
        height: "42px",
        width: "42px",
        fontSize: "1rem",
        borderRadius: "8px",
      },
    },
  },
};
