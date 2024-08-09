import { Card, Stack, TextField, Typography } from "@mui/material";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

import { partnersAdminApi } from "@/app/api/apiGenerator/admin";
import { mediaQueryHelp } from "@/app/styles/functions";
import { FIELDS } from "@/shared/consts/fields";
import { useRTKAlert } from "@/shared/hooks/useRTKAlert";
import { ButtonLoading } from "@/shared/ui/Button/Loading/ButtonLoading";

export function TotalMarkup() {
  const markup = partnersAdminApi.useGetMarkupAdminQuery(),
    form = useForm<{ markup: string | number }>({ defaultValues: { markup: "" } }),
    [postMarkup, { isLoading: isLoadingSubmit }] = partnersAdminApi.usePutOrCreateMarkupAdminMutation(),
    alert = useRTKAlert();

  form.watch();

  useEffect(() => {
    if (!markup.data) return;
    let percent: number | null | undefined = +(markup.data || 0);
    if (markup.data && "markup" in markup.data) percent = markup.data.markup;

    percent && form.reset({ markup: percent });
  }, [markup.data, form]);

  const submit = (data: { markup: string | number }) => {
    postMarkup({ userMarkupSchema: { markup: +data.markup } }).then((x) => {
      alert("Наценка установлена", "Не удалось установить наценку")(x);
      if ("data" in x) form.reset({ markup: data.markup });
    });
  };

  return (
    <Card>
      <form onSubmit={form.handleSubmit(submit)}>
        <Stack gap={"30px"}>
          <Typography variant="h3">Установка общей наценки</Typography>

          <Stack gap={"10px"}>
            <TextField
              {...FIELDS.markupPrice}
              sx={{ mt: 2 }}
              value={form.getValues(FIELDS.markupPrice.name)}
              onChange={(e) => {
                if (!FIELDS.markupPrice.flyValidation.validate(e.target.value).error) {
                  form.register(FIELDS.markupPrice.name).onChange(e);
                  form.setValue(
                    FIELDS.markupPrice.name,
                    e.target.value.length === 0 ? "" : `${Math.max(+e.target.value, 1)}`,
                  );
                }
              }}
            />
            <Typography sx={mediaQueryHelp({ fontSize: { xs: "1rem" } })}>
              Переключатель по группам и видам номенклатуры/по брендам и видам номенклатуры активируется сразу после
              установки общей наценки
            </Typography>
          </Stack>

          <ButtonLoading
            loading={isLoadingSubmit}
            disabled={!form.formState.isDirty || !form.getValues("markup")}
            type="submit"
            variant="contained">
            Сохранить
          </ButtonLoading>
        </Stack>
      </form>
    </Card>
  );
}
