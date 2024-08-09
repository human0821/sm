import type { SectionMarkupSchema } from "@/app/api/apiGenerator/admin/partnersAdminApi";

import { Card, Stack } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { partnersAdminApi } from "@/app/api/apiGenerator/admin";
import { mediaQueryHelp } from "@/app/styles/functions";
import { FIELDS } from "@/shared/consts/fields";
import { useActions } from "@/shared/hooks/useActions";
import { InputSearch } from "@/shared/ui/Input";
import { throttle } from "@/shared/utils/throttling";

import { SearchBrandButton } from "./FindByBrands.styles";

const buttonsList = [{ label: "Все наценки", value: "" }];

export function FindByBrands() {
  const [selectedButton, setSelectedButton] = useState<{ label: string; value: string }[]>([buttonsList[0]]),
    { data: markups } = partnersAdminApi.useGetListOfAvailableMarkupsAdminQuery(),
    markup = partnersAdminApi.useGetMarkupAdminQuery()?.data?.markup,
    [params] = useSearchParams(),
    [findText, setFindText] = useState(params.get("search") || ""),
    [fetchByGroup, { isFetching: isLoadingByGroup, data: dataByGroup }] =
      partnersAdminApi.useLazyGetSubsectionMarkupAdminQuery(),
    [fetchByBrand, { isFetching: isLoadingByBrand, data: dataByBrand }] =
      partnersAdminApi.useLazyGetBrandsMarkupAdminQuery(),
    isFiltered = selectedButton[0].value !== buttonsList[0].value,
    actions = useActions();

  const findHandler = useCallback(
    throttle(({ markup, search, params }) => {
      const findData = { markup: markup.map((x: { label: string; value: string }) => x.value).join(","), search };
      const fetch = params.get("tab") === "byGroup" ? fetchByGroup : fetchByBrand;
      fetch(findData, true).then(
        //@ts-ignore из за [null, null, null]
        (x) => "data" in x && x.data && actions.setSections({ sections: x.data, filtered: isFiltered }),
      );
    }, 1000),
    [],
  );

  useEffect(() => {
    if (params.get("tab") === "byGroup" && dataByGroup) {
      actions.setSections({ sections: dataByGroup as SectionMarkupSchema[], filtered: isFiltered });
    } else if (params.get("tab") === "byBrand" && dataByBrand) {
      actions.setSections({ sections: dataByBrand as SectionMarkupSchema[], filtered: isFiltered });
    }
  }, [dataByGroup, dataByBrand]);

  useEffect(() => {
    findHandler({ markup: selectedButton, search: findText, params });
  }, [findText, selectedButton, params]);

  useEffect(() => {
    if (!markups?.some((x) => selectedButton.some((y) => y.value === `${x}`)) && selectedButton[0] !== buttonsList[0])
      setSelectedButton([buttonsList[0]]);
  }, [markups]);

  return (
    <Card>
      <Stack gap={"15px"}>
        <InputSearch
          {...FIELDS.searchBrand}
          onChange={(e) => setFindText(e.target.value)}
          isLoading={isLoadingByGroup || isLoadingByBrand}
        />

        <Stack flexWrap={"wrap"} gap={"10px"} direction={"row"}>
          {[...buttonsList, ...(markups?.map((x) => ({ label: `${x}%`, value: `${x}` })) || [])].map(({ label, value }) => (
            <SearchBrandButton
              disabled={!markup}
              sx={mediaQueryHelp({ fontSize: { xs: "0.75rem", s: "0.875rem" } })}
              $isSelected={selectedButton.some((x) => x.value === value)}
              onClick={() => {
                setSelectedButton((x) => {
                  if (x.some((x) => x.value === value)) {
                    const result = x.filter((x) => x.value !== value);
                    return result.length ? result : [buttonsList[0]];
                  }
                  if (buttonsList.map((x) => x.value).includes(value)) return [{ label, value }];
                  else
                    return [...(x || []), { label, value }].filter(
                      (x) => !buttonsList.map((x) => x.value).includes(x.value),
                    );
                });
              }}
              key={label}>
              {label}
            </SearchBrandButton>
          ))}
        </Stack>
      </Stack>
    </Card>
  );
}
