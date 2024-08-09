import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";

import { DatePicker } from "@/shared/ui/DatePicker/DatePicker";

export const DateFilter = ({ paramName, placeholder }: DateFilter) => {
  const { search } = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentValue, setCurrentValue] = useState<dayjs.Dayjs | null | undefined>(
    searchParams.get(paramName) ? dayjs(searchParams.get(paramName)) : undefined,
  );
  const [currentPage, setCurrentPage] = useState<number>(parseInt(searchParams.get("page")!) || 1);

  const handleChange: DatePickerProps["onChange"] = (value) => {
    if (value) {
      setCurrentValue(value);

      if (value) {
        searchParams.set(paramName, dayjs(value).format("YYYY-MM-DD"));
      } else {
        searchParams.delete(paramName);
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
    <DatePicker
      placeholder={placeholder} // @ts-ignore
      value={currentValue}
      onChange={handleChange}
    />
  );
};
