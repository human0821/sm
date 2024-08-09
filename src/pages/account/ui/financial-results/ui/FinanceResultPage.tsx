import { Stack } from "@mui/material";

import { Breakpoints } from "@/app/styles";
import { useGetScreen } from "@/shared/hooks/useGetScreen";
import { CatalogControlMode } from "@/widgets/account/catalog-control-mode";
import { DiscountsSellers } from "@/widgets/account/discounts-sellers";
import { FindByBrands } from "@/widgets/account/find-by-brands";
import { ResultFindBrands } from "@/widgets/account/result-find-brands";
import { TotalMarkup } from "@/widgets/finance-result/TotalMarkup";

import { FinanceResultPageWrap } from "./FinanceResultPage.styles";

export const FinanceResultPage = () => {
  const size = useGetScreen();

  return (
    <FinanceResultPageWrap>
      <Stack gap={"40px"}>
        <DiscountsSellers />

        {size.width < parseInt(Breakpoints.DESKTOP) && <TotalMarkup />}
        <CatalogControlMode />
      </Stack>

      <Stack gap={"40px"}>
        {size.width >= parseInt(Breakpoints.DESKTOP) && <TotalMarkup />}

        <FindByBrands />

        <ResultFindBrands />
      </Stack>
    </FinanceResultPageWrap>
  );
};
