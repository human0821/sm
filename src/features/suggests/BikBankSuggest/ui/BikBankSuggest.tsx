import type { FC } from "react";

import { Autocomplete, createFilterOptions, TextField, Typography } from "@mui/material";

import { useGetDataOnBikQuery } from "@/app/api/dadata/api";
import { Suggest } from "@/shared/ui/Suggest";

const filter = createFilterOptions<ApiDadataBikSuggestion>();

export const BikBankSuggest: FC<BikBankSuggest> = ({ bik, inputProps, limit = 10, onChange }) => {
  const { data = [] } = useGetDataOnBikQuery({ query: bik, count: limit }, { skip: bik.length === 0 });

  return (
    <Autocomplete
      freeSolo
      options={bik.length > 0 ? data : []}
      disableClearable
      value={bik}
      onChange={(_, option) => onChange(option as ApiDadataBikSuggestion)}
      getOptionLabel={(option) => (typeof option === "string" ? option : option.data.bic)}
      filterOptions={(options, params) => {
        const filtered = filter(options, params);
        const uniqueInnSet = new Set();

        return filtered.filter((option) => {
          if (uniqueInnSet.has(option.data.bic)) return false;
          uniqueInnSet.add(option.data.bic);
          return true;
        });
      }}
      renderOption={(props, option, { index }) => (
        <li {...props} key={`${option.data.bic}-${index}`}>
          <Suggest title={option.value}>
            <Typography>{option.data.bic}</Typography>
          </Suggest>
        </li>
      )}
      renderInput={(params) => (
        <TextField {...params} {...inputProps} inputProps={{ ...params.inputProps, onChange: inputProps.onChange }} />
      )}
    />
  );
};
