import { Box, Button, Stack } from "@mui/material";
import { Link } from "react-router-dom";

import Routes from "@/app/routes/consts/routes";
import { mediaQueryHelp } from "@/app/styles/functions";
import { InfoEmptyText } from "@/entities/counterparties/info/ui/CounterpartyInfo.styled";
import { DateFilter } from "@/entities/date-filter";
import { Pagination } from "@/entities/pagination";
import { Sort } from "@/entities/sort";
import { Loader } from "@/shared/ui/Button/Loading/ButtonLoading.styled";
import { InputSearch } from "@/shared/ui/Input";
import { BannersTable } from "@/widgets/administration/banners-table";

import { BannersTopBlock, BannersBottomBlock, ActiveAndDateWrap, BannersHeader } from "./BannerManagementPage.styled";
import { useBannerManagement } from "../hooks/useBannerManagement";

export const BannerManagementPage = () => {
  const { banners, isLoading } = useBannerManagement();

  return (
    <Stack gap={3}>
      <BannersHeader>
        <BannersTopBlock>
          <InputSearch placeholder="Поиск по записям" fullWidth />
          <Box
            sx={mediaQueryHelp({
              width: { xs: "100%", s: "188px", m: "260px", l: "304px", xl: "363px", xxl: "443px" },
            })}>
            <Link to={Routes.SYSTEM_BANNERS_СREATE_PAGE}>
              <Button
                variant="contained"
                size="large"
                fullWidth
                sx={mediaQueryHelp({ height: { xs: "48px", s: "56px", m: "64px" } })}>
                Создать запись
              </Button>
            </Link>
          </Box>
        </BannersTopBlock>
        <BannersBottomBlock>
          <ActiveAndDateWrap>
            <Sort
              placeholder="Активность"
              options={[
                { name: "Активные", value: "true" },
                { name: "Неактивные", value: "false" },
              ]}
              paramName="active"
              sx={{ width: "100% !important" }}
            />
            <DateFilter placeholder="Дата публикации" paramName="created" />
          </ActiveAndDateWrap>
        </BannersBottomBlock>
      </BannersHeader>

      <Box flexGrow={1}>
        {banners?.items?.length ? (
          <BannersTable banners={banners.items} total={banners.total} />
        ) : (
          <InfoEmptyText sx={{ marginTop: "clamp(70px, 15vw, 200px)" }}>
            {isLoading ? (
              <Loader
                sx={({ palette }) => ({
                  color: palette.primary.main,
                })}
              />
            ) : (
              "Баннеры не найдены"
            )}
          </InfoEmptyText>
        )}
      </Box>

      <Pagination count={banners?.pages || 0} position="center" />
    </Stack>
  );
};
