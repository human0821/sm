import { CallIcon, MailIcon, ProfileIcon } from "@/assets/icons";
import { formatPhone } from "@/shared/utils/stringHelpers";

export function useProfileInfo({ user }: { user?: StoreUser.Profile | null }): {
  icon: React.ReactNode;
  text?: string;
}[] {
  return (
    [
      {
        icon: <ProfileIcon />,
        text: user?.roles?.map((role) => role.name).join(", "),
      },
      {
        icon: <CallIcon />,
        text: formatPhone(user?.phoneNumber || ""),
      },
      {
        icon: <MailIcon />,
        text: user?.email,
      },
    ].filter((info) => info.text) || []
  );
}
