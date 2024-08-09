import { styled } from "@mui/material";

export const SwiperWrapper = styled("div")`
  display: grid;
  position: relative;
  height: 100%;
  & .swiper {
    width: 100%;
    height: 100%;
  }
  & .swiper-horizontal {
    .swiper-pagination {
      bottom: 20px;
      line-height: 0;
    }
    .swiper-pagination-bullet {
      margin: 0 4px !important;
      background-color: ${({ theme }) => theme.palette.secondary.main};
      opacity: 1;

      &.swiper-pagination-bullet-active {
        background-color: ${({ theme }) => theme.palette.primary.main};
      }
    }
  }
`;

export const SwiperNavigation = styled("div")`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  & > * {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: all;
    &:first-of-type {
      left: 60px;
      & > svg {
        transform: rotate(180deg);
      }
    }
    &:last-child {
      right: 60px;
    }
  }
`;

export const SwiperPagination = styled("div")``;
