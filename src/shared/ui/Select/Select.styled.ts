import { styled, InputLabel, FormControl as FormControlMui, MenuItem, Checkbox, ListItemText } from "@mui/material";

import { Colors, Functions } from "@/app/styles";
import { mediaQueryHelp } from "@/app/styles/functions";

export const Placeholder = styled("div")`
  color: ${({ theme }) => theme.palette.primary.main}60;
  ${Functions.mediaQueryHelp({
    fontSize: ["0.875rem", "1rem", "1rem", "1.125rem"],
  })}
`;

export const Label = styled(InputLabel)`
  color: ${({ theme }) => theme.palette.text.secondary};
  font-size: 0.875rem;
`;

export const FormControl = styled(FormControlMui)`
  width: 100%;
  height: 64px;
`;

export const Option = styled(MenuItem)`
  padding: 0 20px;
  min-height: 44px !important;
  border-bottom: solid 1px ${Colors.DIVIDER};

  ${mediaQueryHelp({
    minHeight: { s: "56px !important", m: "56px !important", l: "64px !important" },
  })}
`;

export const OptionAll = styled("div")`
  padding: 0 20px;
  min-height: 44px !important;
  border-bottom: solid 1px ${Colors.DIVIDER};

  ${mediaQueryHelp({
    minHeight: { s: "56px !important", m: "56px !important", l: "64px !important" },
  })}
`;

export const OptionText = styled("p")`
  width: 100%;
  font-size: 0.75rem;
  line-height: 0.75rem;
  ${mediaQueryHelp({
    fontSize: { s: "0.875rem", m: "1rem", l: "1.125rem" },
    lineHeight: { s: "0.875rem", m: "1rem", l: "1.125rem" },
  })}
`;
