import type { UseFormReturn } from "react-hook-form";

import { useState, useEffect } from "react";

import { casesApi } from "@/app/api/apiGenerator/common";
import { motionFade } from "@/shared/consts/motion";
import { SelectMui } from "@/shared/ui/Select/MuiSelect";

import { SelectWrapper } from "./SelectCase.styled";

export const SelectCase = ({ form, disabled }: { form: UseFormReturn<any, any>; disabled?: boolean }) => {
  const [cases, setCases] = useState<Select.Option[]>([]);

  const fetchCases = casesApi.useGetShortCasesQuery();

  useEffect(() => {
    if (fetchCases.data) {
      const newCases = fetchCases.data.map(({ id, name }) => ({ value: id, name }));
      setCases(newCases);
    }
  }, [fetchCases]);

  return (
    <>
      {cases.length > 0 && (
        <SelectWrapper {...motionFade}>
          <SelectMui
            label="Выбор типа цены"
            sx={{ width: "100%" }}
            options={cases}
            defaultValue={`${cases[0].value}`}
            disabled={disabled}
            {...form.register("caseSegmentId", {})}
          />
        </SelectWrapper>
      )}
    </>
  );
};
