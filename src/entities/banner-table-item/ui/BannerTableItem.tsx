import type { BannerSchema, PageBannerSchema } from "@/app/api/apiGenerator/admin/bannersAdminApi";

import { useNavigate } from "react-router-dom";

import Routes from "@/app/routes/consts/routes";
import { EditIcon, PlayIcon } from "@/assets/icons";
import { ActiveBannerButton, DeleteBannerButton, PositionBannerButton } from "@/features/administration";
import { ButtonIcon } from "@/shared/ui/Button";
import { Picture } from "@/shared/ui/Picture/Picture";
import { Table } from "@/shared/ui/Table/ui/Table";
import { TextEllipsis } from "@/shared/ui/TextEllipsis/TextEllipsis";
import { dateFormat } from "@/shared/utils/dateUtils";
import { getIsVideoByUrl } from "@/shared/utils/stringHelpers";

import { ImageTable, ButtonsWrapper, BannerVideoPreview, BannerPlay, BannerVideoWrapper } from "./BannerTableItem.styled";

export const BannerTableItem = ({ banner, total }: { banner: BannerSchema; total: PageBannerSchema["total"] }) => {
  const isVideo = getIsVideoByUrl(banner.file);
  const navigate = useNavigate();

  return (
    <Table.BodyRow>
      <td>
        <PositionBannerButton id={banner.id} positionNumber={banner.positionNumber} maxNumber={total} />
      </td>
      <td>
        <TextEllipsis $lineClamp={3} sx={{ wordBreak: "break-word" }}>
          {banner.name}
        </TextEllipsis>
      </td>
      <td>{banner.active ? "Активен" : "Неактивен"}</td>
      <td>{dateFormat(banner.created)}</td>
      <td>
        <ImageTable>
          {isVideo ? (
            <BannerVideoWrapper>
              <BannerVideoPreview src={banner.file} />
              <BannerPlay>
                <PlayIcon />
              </BannerPlay>
            </BannerVideoWrapper>
          ) : (
            <Picture src={banner.file} container={{ width: "100%", height: "100%" }} />
          )}
        </ImageTable>
      </td>
      <td>
        <ButtonsWrapper>
          <ActiveBannerButton id={banner.id} active={banner.active} />
          <ButtonIcon onClick={() => navigate(`${Routes.SYSTEM_BANNERS_PAGE}/${banner.id}`)}>
            <EditIcon />
          </ButtonIcon>
          <DeleteBannerButton id={banner.id} icon />
        </ButtonsWrapper>
      </td>
    </Table.BodyRow>
  );
};
