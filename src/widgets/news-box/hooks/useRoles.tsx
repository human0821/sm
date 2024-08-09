import { useMemo } from "react";

import { NewsType } from "@/app/api/news/api";
import { useAppSelector } from "@/app/store";
import { ImportantIcon } from "@/assets/icons";
import { IMPORTANT } from "@/shared/consts/content";
import { SUPER_ROLES } from "@/shared/consts/roles";

import { FOR_ALL, SURVEY, MANY_CHOICE } from "../consts";
import { Role } from "../ui/NewsBox/NewsBox.styled";

export const useRoles = (newsDetail: NewsBox.DetailEntity<NewsType> | undefined) => {
  const userRoles = useAppSelector((state) => state.user.user?.roles) || [];
  const isSuperRole = userRoles.find((role) => SUPER_ROLES.includes(role.id));
  const role = (role: News.Role) => <Role key={role.id}>{role.name}</Role>;

  return useMemo(() => {
    let list = [];
    if (newsDetail?.newsType === NewsType.Survey) {
      list.push(<Role key={-1}>{SURVEY}</Role>);
    }
    if (newsDetail?.manyChoiceFlag) {
      list.push(<Role key={-4}>{MANY_CHOICE}</Role>);
    }
    if (newsDetail?.forAllFlag) {
      list.push(<Role key={-3}>{FOR_ALL}</Role>);
    } else {
      let roles: JSX.Element[] = [];
      if (isSuperRole) {
        roles = newsDetail?.roles?.map(role) || [];
      } else {
        roles =
          newsDetail?.roles?.filter((role) => userRoles.find((userRole) => userRole.name === role.name)).map(role) || [];
      }
      list = [...list, ...roles];
    }
    if (newsDetail?.importantFlag) {
      list.push(
        <Role key={-2} id="important">
          <ImportantIcon />
          {IMPORTANT}
        </Role>,
      );
    }
    return list;
  }, [newsDetail]);
};
