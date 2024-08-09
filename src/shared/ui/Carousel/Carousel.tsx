import { useRef, type ReactNode } from "react";
import { type Swiper as SwiperType } from "swiper";
import { Pagination } from "swiper/modules";
import { type SwiperProps, Swiper, SwiperSlide } from "swiper/react";

import { ButtonChevron } from "@/shared/ui/Button/Chevron/ButtonChevron";

import { SwiperNavigation, SwiperWrapper } from "./Carousel.styled";

import "swiper/css";
import "swiper/css/pagination";

export function Carousel({
  children,
  swiperProps,
  otherOptions,
}: {
  children: ReactNode[];
  swiperProps?: SwiperProps;
  otherOptions?: Carousel;
}) {
  const swiperRef = useRef<SwiperType>();

  return (
    <SwiperWrapper>
      <Swiper
        {...swiperProps}
        modules={[Pagination]}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}>
        {children.map((child, index) => (
          <SwiperSlide key={index}>{child}</SwiperSlide>
        ))}
      </Swiper>

      {children.length > 1 && otherOptions?.navigation && (
        <SwiperNavigation>
          <ButtonChevron variant="swiper-navigation" onClick={() => swiperRef.current?.slidePrev()} />
          <ButtonChevron variant="swiper-navigation" onClick={() => swiperRef.current?.slideNext()} />
        </SwiperNavigation>
      )}
    </SwiperWrapper>
  );
}
