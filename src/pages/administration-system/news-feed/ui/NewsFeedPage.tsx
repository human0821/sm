import { Box, Button, Stack } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import { userApi } from "@/app/api/apiGenerator/common";
import Routes from "@/app/routes/consts/routes";
import { mediaQueryHelp } from "@/app/styles/functions";
import { InfoEmptyText } from "@/entities/counterparties/info/ui/CounterpartyInfo.styled";
import { Pagination } from "@/entities/pagination";
import { FIELDS } from "@/shared/consts/fields";
import { motionFade } from "@/shared/consts/motion";
import { Loader } from "@/shared/ui/Button/Loading/ButtonLoading.styled";
import { DatePicker } from "@/shared/ui/DatePicker/DatePicker";
import { InputSearch } from "@/shared/ui/Input";
import { SelectMui } from "@/shared/ui/Select/MuiSelect";
import { fieldRegister } from "@/shared/utils/fieldRegister";
import { NewsFeedTable } from "@/widgets/administration/ui";

import { NewsFeedSearchBlock, RolesAndDateWrap } from "./NewsFeedPage.styles";
import { useNewsFeed } from "../hooks/useNewsFeed";

export function NewsFeedPage() {
  const { form, submit, news, isLoading, isDirty } = useNewsFeed();
  const watchFields = form.watch(["search", "newsType", "roles", "datePublish", "dateFinish"]),
    roles = userApi.useGetRolesQuery().data;

  useEffect(
    () => {
      submit(form.getValues());
    },
    watchFields.map((x) => x),
  );

  return (
    <Stack gap={3} minHeight="100%">
      <form onSubmit={form.handleSubmit(submit)} style={{ width: "100%", position: "relative" }}>
        <NewsFeedSearchBlock>
          <InputSearch {...fieldRegister(form, FIELDS.searchNews)} sx={mediaQueryHelp({ flexGrow: { xs: 1 } })} />

          <Box
            sx={mediaQueryHelp({
              width: { xs: "100%", s: "188px", m: "260px", l: "304px", xl: "363px", xxl: "443px" },
            })}>
            <Link to={Routes.SYSTEM_NEWS_CREATE_PAGE}>
              <Button
                variant="contained"
                size="large"
                fullWidth
                sx={mediaQueryHelp({ height: { xs: "48px", s: "56px", m: "64px" } })}>
                Создать запись
              </Button>
            </Link>
          </Box>
        </NewsFeedSearchBlock>

        <RolesAndDateWrap>
          <SelectMui
            {...fieldRegister(form, {
              ...FIELDS.newsType,
              options: [{ name: "Все", value: "all" }, ...FIELDS.newsType.options],
            })}
            label=""
            defaultValue={"all"}
          />
          <SelectMui
            {...fieldRegister(form, FIELDS.roles)}
            options={roles?.map((x) => ({ name: x.name, value: `${x.id}` }))}
            multiple
            label=""
            placeholder={"Видимость"}
          />

          <DatePicker
            {...fieldRegister(form, { ...FIELDS.datePublish, label: "" })}
            onChange={(x) => form.setValue("datePublish", x?.toISOString())}
            placeholder="Дата публикации"
          />
          <DatePicker
            {...fieldRegister(form, { ...FIELDS.dateFinish, label: "" })}
            onChange={(x) => form.setValue("dateFinish", x?.toISOString())}
            placeholder="Дата окончания"
          />
        </RolesAndDateWrap>
      </form>

      <Box flexGrow={news?.results?.length ? 0 : 1}>
        {news?.results?.length ? (
          <motion.div {...motionFade}>
            <NewsFeedTable news={news?.results || []} />
          </motion.div>
        ) : (
          <InfoEmptyText sx={{ marginTop: "clamp(70px, 15vw, 200px)" }}>
            {isLoading ? (
              <Loader
                sx={({ palette }) => ({
                  color: palette.primary.main,
                })}
              />
            ) : isDirty ? (
              "Записей не найдено"
            ) : (
              "Пока нет записей"
            )}
          </InfoEmptyText>
        )}
      </Box>

      <Pagination count={Math.floor((news?.total || 10) / 10)} position="center" />
    </Stack>
  );
}
