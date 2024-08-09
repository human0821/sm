import { Stack } from "@mui/material";

import { mediaQueryHelp } from "@/app/styles/functions";
import { InfoEmptyText } from "@/entities/counterparties/info/ui/CounterpartyInfo.styled";

export function SettingsNotifications() {
  return (
    <Stack sx={mediaQueryHelp({ height: { xs: "40vh", s: "50vh", xl: "65vh" } })}>
      <InfoEmptyText
        sx={mediaQueryHelp({
          fontSize: { xs: "0.875rem", s: "1.125rem", m: "1.25rem", l: "1.5rem", xxl: "2rem" },
        })}>
        Блок настройки уведомлений в процессе разработки
      </InfoEmptyText>
    </Stack>
  );
}
