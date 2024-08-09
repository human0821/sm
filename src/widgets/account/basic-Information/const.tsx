import { VkIcon, TgIcon, OkIcon } from "@/assets/icons";
import { FIELDS } from "@/shared/consts/fields";

export const socialLinks = [
  {
    icon: <VkIcon />,
    name: "vkLink",
  },
  {
    icon: <TgIcon />,
    name: "telegramLink",
  },
  {
    icon: <OkIcon />,
    name: "okLink",
  },
] as const;

export const fieldBasicInfoList = [FIELDS.nameShop, FIELDS.phone, FIELDS.email, FIELDS.shopDescription];
