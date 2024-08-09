import type { CounterPartyTypeEnum } from "@/app/api/apiGenerator/common/counterpartyApi";
import type { TextFieldProps } from "@mui/material";

global {
  interface BikBankSuggest {
    inputProps: TextFieldProps;
    bik: string;
    limit?: number;
    onChange: (value: ApiDadataBikSuggestion) => void;
  }
}
