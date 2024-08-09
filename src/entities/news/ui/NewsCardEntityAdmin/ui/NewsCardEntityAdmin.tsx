import type { NewsCardV2Props } from "../types";

import { Box, Card, Stack } from "@mui/material";
import { Link } from "react-router-dom";

import Routes from "@/app/routes/consts/routes";
import { mediaQueryHelp } from "@/app/styles/functions";
import { CommentIcon } from "@/assets/icons";
import { IMPORTANT } from "@/shared/consts/content";
import { Tag } from "@/shared/ui/Tag/Tag";
import { TextEllipsis } from "@/shared/ui/TextEllipsis/TextEllipsis";
import { dateFormat } from "@/shared/utils/dateUtils";

import { NewsCardEntityAdminWrap } from "./NewsCardEntityAdmin.styles";

/** Новый компонент карточки новости */
export function NewsCardEntityAdmin({ news }: { news: NewsCardV2Props }) {
  const tags: Tag[] = [{ name: `${news.roles?.[0].name}` }].concat(
    (news.roles?.length || 0) > 1 ? [{ name: `+${(news.roles?.length || 0) - 1}` }] : [],
  );

  return (
    <Card sx={{ p: "20px !important", height: "100%" }}>
      <NewsCardEntityAdminWrap>
        <Stack gap={3} height={"100%"}>
          <Stack gap={1} direction={"row"}>
            <Stack gap={1} direction={"row"}>
              {tags?.map((tag) => (
                <TextEllipsis sx={{ maxWidth: 200, marginLeft: "auto" }} key={tag.name}>
                  <Tag {...tag} />
                </TextEllipsis>
              ))}
            </Stack>
            {news.importantFlag && (
              <Box marginLeft={"auto"}>
                <Tag name={IMPORTANT} isImportant />
              </Box>
            )}
          </Stack>
          <TextEllipsis
            $lineClamp={5}
            sx={{ flexGrow: 1, ...mediaQueryHelp({ fontSize: { xs: "0.875rem", s: "1rem", l: "1.125rem" } }) }}>
            <Link to={`${Routes.NEWS}/${news.id}`}>{news.header}</Link>
          </TextEllipsis>
          <Stack direction={"row"} justifyContent={"space-between"}>
            <Link to={`${Routes.NEWS}/${news.id}#comments`}>
              <Stack direction={"row"} gap={0.5} alignItems={"center"} fontSize={"1rem"}>
                <CommentIcon style={{ cursor: "pointer" }} />
                <span>{news.comments}</span>
              </Stack>
            </Link>
            <Box sx={{ fontSize: "0.875rem" }}>{dateFormat(news.datePublish)}</Box>
          </Stack>
        </Stack>
      </NewsCardEntityAdminWrap>
    </Card>
  );
}
