declare namespace ApiUserResponse {
  export interface GetUser {
    id: string;
    email: string;
    phone_number?: string;
    full_name?: string;
    last_link: string | null;
    avatar?: string;
    roles: UserRole[];
  }
  export interface UpdateAvatar {
    avatar: string;
  }
  export interface GetProfile extends GetUser {
    position: string;
    // Беру из слайса юзера в camelCase, потому что все равно трансформирую ответ в rtk
    // Чисто для документации, что в ответе будет. Не хочу дублировать все интерфейсы в snake_case
    manager: StoreUser.Manager;
    bonus: StoreUser.Bonus;
    user_case: StoreUser.UserCase;
    partner_addresses: StoreUser.PartnerAddress[];
    employee: StoreUser.Employee;
    full_name?: string | null;
    company_name?: string | null;
  }
}

declare namespace ApiUserRequest {
  export interface UpdateAvatar {
    body?: FormData;
    userId: string;
  }
  export interface ChangePassword {
    userId: string;
    password: string;
    newPassword: string;
  }
}
