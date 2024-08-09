import type { NewsListSchema } from "@/app/api/apiGenerator/common/newsApi";
import type { RootState } from "@/app/store";

import { useMemo } from "react";
import { useSelector } from "react-redux";

import { NewsType } from "@/app/api/news/api";
import { CONTENT_FOR_ALL } from "@/shared/consts/content";
import { SUPER_ROLES } from "@/shared/consts/roles";

export function useCardTags({
  newsCard,
}: {
  newsCard: Pick<NewsListSchema, "newsType"> &
    Partial<Pick<NewsListSchema, "roles" | "importantFlag" | "forAllFlag">> & { isImportant?: boolean };
}) {
  const userRoles = useSelector((state: RootState) => state.user.user?.roles) || [];
  const newsTags: Tag[] = useMemo(() => {
    const tags: Tag[] = [];
    if (newsCard.newsType === NewsType.Survey) {
      tags.push({
        name: NewsType.Survey,
      });
    }

    if (newsCard.forAllFlag) {
      tags.push({
        name: CONTENT_FOR_ALL,
      });
    } else {
      const finedRoles = newsCard.roles?.filter((role) => userRoles.find((userRole) => userRole.name === role.name));
      if (userRoles.find((role) => SUPER_ROLES.includes(role.id))) {
        tags.push({
          name: finedRoles?.[0]?.name || newsCard.roles?.[0].name || "",
        });
        if (newsCard.roles?.length || 0 > 1) {
          tags.push({
            name: `+${newsCard.roles?.length || 0 - 1}`,
          });
        }
      } else if (finedRoles && finedRoles.length >= 1) {
        tags.push({
          name: finedRoles[0].name,
        });
        if (finedRoles.length > 1) {
          tags.push({
            name: `+${finedRoles.length - 1}`,
          });
        }
      }
    }

    if (("isImportant" in newsCard && newsCard.isImportant) || ("importantFlag" in newsCard && newsCard.importantFlag)) {
      tags.push({
        isImportant: true,
        name: "Важно",
      });
    }

    return tags;
  }, [newsCard, userRoles]);

  return newsTags;
}
