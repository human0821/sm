interface PeriodDate {
  date_from: string;
  date_to: string;
}

declare namespace PromotionEntity {
  export interface PromotionData {
    image: string;
    title: string;
    description: string;
    period: PeriodDate;
  }
}
