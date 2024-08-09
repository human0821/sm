import type { CounterPartyTypeEnum } from "@/app/api/apiGenerator/common/counterpartyApi";
import type { TextFieldProps } from "@mui/material";

global {
  interface InnSuggest {
    type: CounterPartyTypeEnum;
    inputProps: TextFieldProps;
    inn: string;
    limit?: number;
    onChange: (value: ApiDadataInnSuggestion) => void;
  }
}
