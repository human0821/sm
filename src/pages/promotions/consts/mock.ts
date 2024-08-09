import PromotionImage from "root/public/images/auth/auth-bg.webp";

const promotionMock = {
  image: PromotionImage,
  title: "Скидка 20% на всю мебель",
  description:
    "С 12 марта по 16 апреля действует скидка на всю мебель в нашем магазине. Покупайте товары и получайте скидку!",
  period: {
    date_from: "12.02.2023",
    date_to: "14.02.2023",
  },
};

export const promotionsMock: PromotionEntity.PromotionData[] = Array(6).fill(promotionMock);
