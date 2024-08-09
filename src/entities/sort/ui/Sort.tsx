import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";

import Select from "@/shared/ui/Select/Select";

const getSelectedValue = (param: string | null, options: Select.Option[], multiple?: boolean) => {
  let selectedValue = null;
  if (param) {
    const values = param?.split(",");
    let foundOption;
    if (values.length > 1) {
      foundOption = options.filter((option) => values.some((item) => item === String(option.value)));
    } else {
      foundOption = options.find((option) => String(option.value) === param);
      foundOption = foundOption && multiple ? [foundOption] : foundOption;
    }
    selectedValue = foundOption || null;
  }

  return selectedValue;
};

export const Sort = ({ options, paramName, placeholder, multiple, sx }: Sort) => {
  const { search } = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedOption, setSelectedOption] = useState<Select.Option | Select.Option[] | null>(
    getSelectedValue(searchParams.get(paramName), options, multiple),
  );
  const [currentPage, setCurrentPage] = useState<number>(parseInt(searchParams.get("page")!) || 1);

  const handleSelectChange: Select.Component["onCustomChange"] = (value) => {
    if ((value as Select.Option)?.value) {
      const val = value as Select.Option;
      const foundOption = options.find((option) => option.value === val?.value);
      foundOption && setSelectedOption(foundOption);

      if (value) {
        searchParams.set(paramName, val.value.toString());
      } else {
        searchParams.delete(paramName);
      }
    } else if (value as Select.Option[]) {
      const val = value as Select.Option[];
      let empty = null;

      const foundOption = options.filter((option) =>
        val.some((item) => {
          if (item.value === "") empty = option;
          return item.value === option.value;
        }),
      );

      setSelectedOption(foundOption);

      if (empty) {
        searchParams.delete(paramName);
      } else {
        if (foundOption.length > 0) {
          const values = foundOption.map((item) => item.value);

          searchParams.set(paramName, values.toString());
        } else {
          searchParams.delete(paramName);
        }
      }
    }

    if (currentPage > 1) {
      searchParams.set("page", "1");
    }

    setSearchParams(searchParams);
  };

  useEffect(() => {
    setCurrentPage(parseInt(searchParams.get("page")!) || 1);
  }, [search]);

  return (
    <Select
      options={options}
      placeholder={placeholder}
      multiple={multiple}
      defaultValue={selectedOption ? selectedOption : undefined}
      sx={sx || { width: 327, minWidth: 327 }}
      onCustomChange={handleSelectChange}
    />
  );
};
