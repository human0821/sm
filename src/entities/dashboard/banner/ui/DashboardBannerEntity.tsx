import { Link } from "@mui/material";
import { useDispatch } from "react-redux";

import Routes from "@/app/routes/consts/routes";
import { setLightbox } from "@/app/store/layout/slice";
import { PlayIcon } from "@/assets/icons";
import { Picture } from "@/shared/ui/Picture/Picture";
import { getIsVideoByUrl } from "@/shared/utils/stringHelpers";

import {
  DashboardBannerEntityLink,
  DashboardBannerEntityPlay,
  DashboardBannerEntityTitle,
  DashboardBannerEntityVideoPreview,
  DashboardBannerEntityWrapper,
} from "./DashboardBannerEntity.styled";

export function DashboardBannerEntity(banner: DashboardBannerEntity) {
  const dispatch = useDispatch();
  const isVideo = getIsVideoByUrl(banner.file);

  let pictureComponent;
  let actionComponent;
  if (isVideo) {
    pictureComponent = <DashboardBannerEntityVideoPreview src={banner.file}></DashboardBannerEntityVideoPreview>;
    actionComponent = (
      <DashboardBannerEntityPlay onClick={() => dispatch(setLightbox({ slides: [banner.file || ""] }))}>
        <PlayIcon />
      </DashboardBannerEntityPlay>
    );
  } else {
    pictureComponent = <Picture src={banner.file} container={{ width: "100%", height: "100%" }} />;
    actionComponent = <DashboardBannerEntityLink to={banner.link || Routes.DASHBOARD_PAGE} target="_blank" />;
  }

  return (
    <DashboardBannerEntityWrapper>
      {pictureComponent}
      {actionComponent}
      <DashboardBannerEntityTitle variant="h2">
        <Link target="_blank" href={banner.link || Routes.DASHBOARD_PAGE} underline="hover">
          {banner.name}
        </Link>
      </DashboardBannerEntityTitle>
    </DashboardBannerEntityWrapper>
  );
}
