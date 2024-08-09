import { InputAdornment, TextField, type TextFieldProps } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";

import { SearchIcon } from "@/assets/icons";

import { Loader } from "../../Button/Loading/ButtonLoading.styled";

const InputSearch = ({ isLoading, ...props }: TextFieldProps & { isLoading?: boolean }) => {
  const { search } = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentValue, setCurrentValue] = useState(searchParams.get("search"));
  const [currentPage, setCurrentPage] = useState<number>(parseInt(searchParams.get("page")!) || 1);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;

    setCurrentValue(value);

    if (value) {
      searchParams.set("search", value.toString());
    } else {
      searchParams.delete("search");
    }

    if (currentPage > 1) {
      searchParams.set("page", "1");
    }

    setSearchParams(searchParams);
    props.onChange?.(event);
  };

  useEffect(() => {
    setCurrentPage(parseInt(searchParams.get("page")!) || 1);
  }, [search]);

  return (
    <TextField
      {...props}
      value={currentValue}
      onChange={handleChange}
      type="search"
      InputProps={{
        endAdornment: isLoading ? (
          <Loader />
        ) : (
          <InputAdornment position="end">
            <SearchIcon width={22} height={22} />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default InputSearch;
