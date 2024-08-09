declare namespace EmployeesApi {
  export interface EmployeeItem {
    id: number;
    fullName: string;
    avatar: string | null;
    email: string;
    deleted: boolean;
    roles: StoreUser.UserRole[];
  }
}
