interface UserInfoCard {
  id: number;
  fullName: string;
  email: string;
  avatar: string | null;
  roles: StoreUser.UserRole[];
}
