import type { PartnerAddressSchema } from "@/app/api/apiGenerator/common/partnersApi";
declare global {
  interface ProfileDeliveryForm {
    address?: PartnerAddressSchema;
  }

  interface ProfileDeliveryDelete {
    addressId: string;
  }

  interface ProfileChangePasswordForm {
    password: string;
    newPassword: string;
    newPasswordRepeat: string;
  }
}
