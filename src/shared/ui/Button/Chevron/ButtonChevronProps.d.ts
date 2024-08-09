interface ButtonChevronComponent {
  variant?: "swiper-navigation" | "banner-toggle";
  active?: number;
  onClick?: () => void;
  disabled?: boolean;
}
