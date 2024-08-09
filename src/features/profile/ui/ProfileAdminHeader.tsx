import type { RootState } from "@/app/store";

import { useSelector } from "react-redux";

import { ChangeAccountIcon, ExitIcon, ProfilePageIcon } from "@/assets/icons";
import { ProfileAdminHeaderEntity } from "@/entities/profile";
import { CONTENT_ROLE_DEFAULT } from "@/shared/consts/content";

import { useProfileAction } from "../hooks/useProfileAction";

export function ProfileAdminHeader() {
  const profileActions = useProfileAction();
  const userRole = useSelector((state: RootState) => state.user.user?.roles?.[0].name);

  const actionsList: ProfileEntity.LayoutHeaderAction[] = [
    {
      title: "Профиль",
      description: userRole || CONTENT_ROLE_DEFAULT,
      icon: <ProfilePageIcon />,
      onClick: profileActions.profileNavigate,
    },
    {
      title: "Смена пользователя",
      icon: <ChangeAccountIcon />,
      onClick: profileActions.switchAccount,
    },
    {
      title: "Выход",
      icon: <ExitIcon />,
      onClick: profileActions.logout,
    },
  ];

  return <ProfileAdminHeaderEntity actionsList={actionsList} />;
}
