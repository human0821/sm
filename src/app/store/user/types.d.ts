declare namespace StoreUser {
  export interface UserRole {
    id: number;
    name: string;
  }
  export interface Employee {
    id: string;
    partnerId: string;
  }
  export interface User {
    id: string;
    email: string;
    phoneNumber?: string;
    fullName?: string;
    companyName?: string;
    shortenedName?: string;
    avatar?: string;
    roles: UserRole[];
    lastLink: string | null;
    employee: Employee;
  }
  export interface State {
    accessToken: string;
    refreshToken: string;
    user: User | null;
  }
  export interface Manager extends Pick<User, "avatar" | "email" | "fullName" | "id" | "phoneNumber"> {
    position: string;
  }
  export interface Bonus {
    count: number;
    operations: [];
  }
  export interface CaseSegment {
    privileges: Record<string, unknown>; // Бека пока нет
    id: string;
    name: string;
    analyzedPeriodStart: string;
    analyzedPeriodEnd: string;
    amountGt: number;
    amountLt: number;
    children: Record<string, unknown>;
  }
  export interface UserCase {
    paidAmount: number;
    dateImmunity: Date;
    caseSegment: CaseSegment;
    id: number;
  }
  export interface PartnerAddress {
    id: number;
    address: string;
  }
  export interface Profile extends User {
    position: string;
    manager: Manager;
    bonus: Bonus;
    userCase: UserCase;
    partnerAddresses: PartnerAddress[];
    employee: Pick<Employee, "id">;
  }
}
