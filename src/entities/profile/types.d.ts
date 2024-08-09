declare namespace ProfileEntity {
  import type { PartnerAddressSchema } from "@/app/api/apiGenerator/common/partnersApi";
  export interface LayoutHeaderAction {
    title: string;
    description?: string;
    icon: React.ReactNode;
    onClick: () => void;
  }

  export interface DeliveryComponent {
    address: PartnerAddressSchema;
    index: number;
    children?: React.ReactNode;
  }
  export interface BonusConditionsData {
    text: string;
    title: string;
  }
  export interface BonusData {
    value: string;
    title: string;
  }
  export interface OrderData {
    type: BonusAmount["variant"];
    order: string;
    date: string;
    price: string;
    items: string[];
  }
}
