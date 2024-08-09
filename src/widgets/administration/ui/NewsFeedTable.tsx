import type { NewsListSchema } from "@/app/api/apiGenerator/admin/newsAdminApi";

import { Box, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

import { userApi } from "@/app/api/apiGenerator/common";
import Routes from "@/app/routes/consts/routes";
import { Breakpoints, Colors } from "@/app/styles";
import { EditIcon, MoreIcon } from "@/assets/icons";
import { DeleteNewsById } from "@/features/news/ui/DeleteNewsById/DeleteNewsById";
import { useGetScreen } from "@/shared/hooks/useGetScreen";
import { IsActive } from "@/shared/ui/isActive";
import { Picture } from "@/shared/ui/Picture/Picture";
import { Table } from "@/shared/ui/Table/ui/Table";
import { TextEllipsis } from "@/shared/ui/TextEllipsis/TextEllipsis";
import { dateFormat } from "@/shared/utils/dateUtils";

import { ButtonIcon, NewsFeedImageTable } from "./NewsFeedTable.styles";
import { TABLE_HEADERS } from "../const";

export function NewsFeedTable({ news = [] }: { news: NewsListSchema[] | [] }) {
  const screen = useGetScreen(),
    isDesktop = screen.width >= parseInt(Breakpoints.DESKTOP),
    [anchorEl, setAnchorEl] = useState<null | Element>(null),
    roles = userApi.useGetRolesQuery().data || [];

  const newsStatus: Record<NewsStatus, IsActive["isActive"]> = {
    "Не активен": "inactive",
    Активен: "active",
    "К публикации": "between",
  };

  return (
    !!news.length && (
      <Box sx={{ overflowX: "auto" }}>
        <Table>
          <Table.Head>
            <tr>
              {TABLE_HEADERS.map((x) => (
                <th key={x.label} style={{ width: x.width }}>
                  {x.label}
                </th>
              ))}
              <th style={{ width: isDesktop ? "30px" : "20px" }}></th>
              {isDesktop && <th style={{ width: "30px" }}></th>}
            </tr>
          </Table.Head>

          <Table.Body>
            {news.map((news, index) => (
              <Table.BodyRow key={index}>
                <td>{news.newsType}</td>
                <td>
                  <IsActive isActive={newsStatus[news.activity as NewsStatus]}>{news.activity}</IsActive>
                </td>
                <td>
                  <TextEllipsis $lineClamp={3} sx={{ lineHeight: "24px" }}>
                    <Link to={`${Routes.NEWS}/${news.id}`}>{news.header}</Link>
                  </TextEllipsis>
                </td>
                <td>
                  <TextEllipsis sx={{ lineHeight: "24px" }} $lineClamp={3}>
                    {[...roles]
                      .map((x) => x.id)
                      ?.sort()
                      .join("") ===
                    news.roles
                      ?.map((x) => x.id)
                      .sort()
                      .join("")
                      ? "Для всех"
                      : news.roles?.map((x) => x.name).join("\n")}
                  </TextEllipsis>
                </td>
                <td>{news.comments || 0}</td>
                <td>{dateFormat(news.datePublish)}</td>
                <td>{dateFormat(news.dateFinish, { format: "DD.MM.YYYY HH:mm" })}</td>
                <td style={{ verticalAlign: "middle" }}>
                  <NewsFeedImageTable>
                    <Picture src={news.banner} alt="news image" container={{ width: "100%", height: "100%" }} />
                  </NewsFeedImageTable>
                </td>
                {isDesktop ? (
                  <>
                    <ButtonIcon>
                      <EditIcon style={{ color: Colors.GREY_MAIN }} />
                    </ButtonIcon>
                    <ButtonIcon>
                      <DeleteNewsById newsId={news.id} />
                    </ButtonIcon>
                  </>
                ) : (
                  <ButtonIcon>
                    <Box onClick={({ currentTarget }) => setAnchorEl(currentTarget)}>
                      <MoreIcon />
                    </Box>
                    <Menu anchorEl={anchorEl} open={!!anchorEl} onClose={() => setAnchorEl(null)}>
                      <MenuItem>Редактировать</MenuItem>
                      <DeleteNewsById newsId={news.id} onChange={() => setAnchorEl(null)}>
                        <MenuItem>Удалить</MenuItem>
                      </DeleteNewsById>
                    </Menu>
                  </ButtonIcon>
                )}
              </Table.BodyRow>
            ))}
          </Table.Body>
        </Table>
      </Box>
    )
  );
}
