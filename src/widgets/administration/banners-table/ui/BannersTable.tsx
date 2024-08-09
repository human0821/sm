import type { BannerSchema, PageBannerSchema } from "@/app/api/apiGenerator/admin/bannersAdminApi";

import { Box } from "@mui/material";

import { BannerTableItem } from "@/entities/banner-table-item";
import { Table } from "@/shared/ui/Table/ui/Table";

import { TABLE_HEADERS } from "../const";

export const BannersTable = ({
  banners = [],
  total,
}: {
  banners: BannerSchema[] | [];
  total: PageBannerSchema["total"];
}) => {
  return (
    !!banners.length && (
      <Box sx={{ overflowX: "auto" }}>
        <Table>
          <Table.Head>
            <tr>
              {TABLE_HEADERS.map((x) => (
                <th key={x.label} style={{ width: x.width }}>
                  {x.label}
                </th>
              ))}
              <th style={{ width: "120px" }}></th>
            </tr>
          </Table.Head>

          <Table.Body>
            {banners.map((banner) => (
              <BannerTableItem key={banner.id} banner={banner} total={total} />
            ))}
          </Table.Body>
        </Table>
      </Box>
    )
  );
};
