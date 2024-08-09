import { BonusAmountVariant } from "@/shared/ui/BonusAmount/BonusAmount";

export const useOrders = () => {
  // note: будет получено с бека
  const imgLink = "/mock/chair.png";
  return [
    {
      type: BonusAmountVariant.GREY,
      order: "1233321",
      date: "12.03.2023",
      price: "+1000",
      items: new Array(10).fill(imgLink),
    },
    {
      type: BonusAmountVariant.GREEN,
      order: "1233667",
      date: "12.01.2023",
      price: "+3000",
      items: new Array(5).fill(imgLink),
    },
    {
      type: BonusAmountVariant.RED,
      order: "4433661",
      date: "12.01.2023",
      price: "-1000",
      items: new Array(12).fill(imgLink),
    },
  ];
};
