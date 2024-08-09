declare namespace ApiPartnersResponse {
  export interface GetMainInfo {
    name: string;
    phone_number: string;
    email: string;
    description: string;
    vk_link: string;
    telegram_link: string;
    ok_link: string;
    id: 0;
  }

  export interface DesignSchema {
    logo: string | null;
    header: string | null;
    side: string | null;
    colorSchema: string;
    id: number;
  }

  export interface PartnerMarkup {
    markup: number;
  }

  export interface PartnerDiscount {
    id: string;
    avatar: string;
    email: string;
    shortened_name: string;
    discount: number;
  }
}

declare namespace ApiPartnersRequest {
  export interface UpdateAddress {
    id?: number;
    address: string;
  }
  export interface DeleteAddress {
    id: number;
  }
  export interface ConnectToManager {
    email: string;
    text: string;
  }

  export interface BasicInformation {
    name: string | null;
    phoneNumber: string | null;
    email: string | null;
    description: string | null;
    vkLink: string | null;
    telegramLink: string | null;
    okLink: string | null;
  }

  export interface UploadDesignImages {
    logo: Blob | null | false;
    header: Blob | null | false;
    side: Blob | null | false;
    logo: Blob | null | false;
    header: Blob | null | false;
    side: Blob | null | false;
    color_schema: string;
  }

  export interface PartnerMarkup {
    markup: number;
  }

  export interface PartnerDiscount {
    seller_id: string;
    discount: number;
    partner_id: string;
  }
}
