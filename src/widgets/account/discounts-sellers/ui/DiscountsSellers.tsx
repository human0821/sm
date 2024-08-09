import { Box, Card, Stack, Typography } from "@mui/material";

import { partnersAdminApi } from "@/app/api/apiGenerator/admin";
import { Colors } from "@/app/styles";
import { mediaQueryHelp } from "@/app/styles/functions";
import { InfoEmptyText } from "@/entities/counterparties/info/ui/CounterpartyInfo.styled";
import { FIELDS } from "@/shared/consts/fields";
import { ButtonLoading } from "@/shared/ui/Button/Loading/ButtonLoading";
import { Loader } from "@/shared/ui/Button/Loading/ButtonLoading.styled";
import { TextEllipsis } from "@/shared/ui/TextEllipsis/TextEllipsis";

import { DiscountsSellersAvatar, DiscountsSellersEditDiscount } from "./DiscountsSellers.styles";
import { useDiscountsSellers } from "../hooks/useDiscountsSellers";

export function DiscountsSellers() {
  const { submit, form, partnersDiscounts, isLoadingPut } = useDiscountsSellers(),
    isDisabled = Object.values(form.getValues()).some((x) => x === ""),
    markup = partnersAdminApi.useGetMarkupAdminQuery();

  return (
    <form onSubmit={form.handleSubmit(submit)}>
      <Stack gap={2}>
        <Card sx={{ border: `${Colors.DIVIDER} 1px solid` }}>
          <Typography variant="h3">Допустимые скидки для продавцов, %</Typography>
        </Card>
        {partnersDiscounts.data?.length ? (
          partnersDiscounts.data?.map((user) => (
            <Card
              key={user!.id}
              sx={mediaQueryHelp({ py: { xs: "20px", xl: "24.5px" }, height: { xs: "80px", s: "120px", l: "149px" } })}>
              <Stack gap={2} flexDirection={"row"} alignItems={"center"}>
                <DiscountsSellersAvatar src={`${user!.avatar}`} />
                <Box flexGrow={1}>
                  <TextEllipsis sx={mediaQueryHelp({ mb: { xs: "0px", s: "10px" } })}>
                    <Typography
                      lineHeight={1}
                      sx={mediaQueryHelp({ fontSize: { xs: "0.875rem", s: "1.125rem", m: "1.25rem", xl: "1.5rem" } })}>
                      {user!.shortenedName}
                    </Typography>
                  </TextEllipsis>
                  <TextEllipsis>
                    <Typography
                      lineHeight={1}
                      variant="gray"
                      sx={mediaQueryHelp({ fontSize: { xs: "0.75rem", s: "1rem", m: "1.125rem" } })}>
                      {user!.email}
                    </Typography>
                  </TextEllipsis>
                </Box>
                <DiscountsSellersEditDiscount
                  value={form.getValues(user!.id)}
                  name={user?.id || ""}
                  onChange={(e) => {
                    if (!FIELDS.markupPrice.flyValidation.validate(e.target.value).error) {
                      form.register(user?.id || "").onChange(e);
                      form.setValue(
                        user?.id || "",
                        e.target.value.length === 0 ? "" : Math.max(Math.min(99, +e.target.value), 1),
                      );
                    }
                  }}
                />
              </Stack>
            </Card>
          ))
        ) : (
          <InfoEmptyText
            sx={mediaQueryHelp({
              fontSize: { xs: "1.125rem", s: "1.25rem", m: "1.25rem", xxl: "2rem" },
              height: { xs: "288px", s: "325px", m: "392px", l: "341px", xl: "518px" },
            })}>
            {partnersDiscounts?.isLoading ? <Loader /> : "Продавцы отсутствуют"}
          </InfoEmptyText>
        )}

        <ButtonLoading
          loading={isLoadingPut}
          disabled={!form.formState.isDirty || isDisabled || !markup.data}
          type="submit"
          variant="contained"
          sx={{ mt: "20px" }}>
          Сохранить
        </ButtonLoading>
      </Stack>
    </form>
  );
}
