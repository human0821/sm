import type { FC } from "react";

import { Autocomplete, createFilterOptions, TextField, Typography } from "@mui/material";

import { useGetDataOnInnQuery } from "@/app/api/dadata/api";
import { Suggest } from "@/shared/ui/Suggest";
import { counterpartyType } from "@/widgets/administration/counterparty-form/consts/counterpartyType";

import { variantSuggests } from "../consts/variantSuggests";

const filter = createFilterOptions<ApiDadataInnSuggestion>();

export const InnSuggest: FC<InnSuggest> = ({ type, inputProps, inn, limit = 10, onChange }) => {
  const isLegal = type === counterpartyType.legal;
  const { data = [] } = useGetDataOnInnQuery(
    {
      query: inn,
      type: isLegal ? variantSuggests.legal : variantSuggests.individual,
      count: limit,
    },
    { skip: inn.length === 0 },
  );

  return (
    <Autocomplete
      freeSolo
      options={inn.length > 0 ? data : []}
      disableClearable
      value={inn}
      onChange={(_, option) => onChange(option as ApiDadataInnSuggestion)}
      getOptionLabel={(option) => (typeof option === "string" ? option : option.data.inn)}
      filterOptions={(options, params) => {
        const filtered = filter(options, params);
        const uniqueInnSet = new Set();

        return filtered.filter((option) => {
          if (uniqueInnSet.has(option.data.inn)) return false;
          uniqueInnSet.add(option.data.inn);
          return true;
        });
      }}
      renderOption={(props, { data: option, value }, { index }) => (
        <li {...props} key={`${index}-${option.inn}`}>
          <Suggest title={isLegal ? option.name?.full_with_opf : value}>
            <Typography>{option.inn}</Typography>
            {option?.address?.value && <Typography>{option?.address?.value}</Typography>}
          </Suggest>
        </li>
      )}
      renderInput={(params) => (
        <TextField {...params} {...inputProps} inputProps={{ ...params.inputProps, onChange: inputProps.onChange }} />
      )}
    />
  );
};
