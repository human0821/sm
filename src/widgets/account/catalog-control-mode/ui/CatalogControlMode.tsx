import { Card, Stack, Typography } from "@mui/material";

import { partnersAdminApi } from "@/app/api/apiGenerator/admin";
import { mediaQueryHelp } from "@/app/styles/functions";
import { GoToControlModeButton } from "@/features/financial-results";

export function CatalogControlMode() {
  const markup = partnersAdminApi.useGetMarkupAdminQuery()?.data?.markup;

  return (
    <Card>
      <Stack gap={"20px"}>
        <Typography variant="h3">Режим управления каталогом</Typography>

        <Typography sx={mediaQueryHelp({ fontSize: { xs: "0.75rem", s: "0.875rem", m: "1rem", xxl: "1.125rem" } })}>
          Для контроля и редактирования каталога используется специальный режим. <br /> В разделе доступны установка наценки
          на все товары в каталоге, публикация карточек товаров в каталоге и снятие их с публикации
        </Typography>

        <GoToControlModeButton disabled={!markup} />
      </Stack>
    </Card>
  );
}
