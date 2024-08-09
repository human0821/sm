import type { RootState } from "@/app/store";

import FsLightbox from "fslightbox-react";
import { useSelector } from "react-redux";

import { useGetScreen } from "@/shared/hooks/useGetScreen";
import { getIsVideoByUrl } from "@/shared/utils/stringHelpers";

export function FsLightboxWidget() {
  const lightbox = useSelector((state: RootState) => state.layout.lightbox);
  const { width: screenWidth, height: screenHeight } = useGetScreen();

  return (
    <FsLightbox
      toggler={lightbox.toggler}
      sources={lightbox.slides.map((slide, index) =>
        slide && getIsVideoByUrl(slide) ? (
          <video key={index} src={slide} autoPlay controls width={screenWidth} height={screenHeight} />
        ) : (
          slide
        ),
      )}
    />
  );
}
