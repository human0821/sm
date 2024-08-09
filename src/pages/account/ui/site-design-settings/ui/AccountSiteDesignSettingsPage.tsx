import { Stack } from "@mui/material";

import { BasicInformation } from "@/widgets/account/basic-Information";
import { DesignSettings } from "@/widgets/account/design-settings";
import { WidgetsShowSettings } from "@/widgets/account/widgets-show-settings";

import { WrapDesignSettings } from "./AccountSiteDesignSettingsPage.styles";
import { PreviewDesignButton } from "./PreviewDesignButton";

const idButton = "design-settings-button";
const idButtonMobile = "design-settings-button-mobile";
export const AccountSiteDesignSettingsPage = () => {
  return (
    <WrapDesignSettings idDesktop={idButton} idMobile={idButtonMobile}>
      <Stack gap={2}>
        <DesignSettings />
        <BasicInformation />
        <PreviewDesignButton id={idButton} />
      </Stack>
      <WidgetsShowSettings />
      <PreviewDesignButton id={idButtonMobile} />
    </WrapDesignSettings>
  );
};
