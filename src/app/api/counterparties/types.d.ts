declare namespace CounterpartiesApi {
  export interface CounterpartyItem {
    id: number;
    name: string;
    email: string;
    legalForm: string;
    isActive: boolean;
    forDeactivation?: boolean;
  }

  export interface CounterpartyAccount {
    bank: string;
    bik: string;
    checkingAccount: string;
    corrAccount: string;
    id: string | number;
    mainFlag: boolean;
  }

  export type CounterpartyPartner = {
    id: string;
    companyName?: string | null;
    fullName?: string | null;
    shortenedName?: string | null;
  };

  export interface CounterpartyDetail {
    id: number;
    name: string;
    email: string;
    legalForm: string;
    isActive: boolean;
    forDeactivation?: boolean;
    inn: string;
    kpp: string;
    companyAddress: string;
    phone: string;
    accounts: CounterpartyAccount[];
    partners: CounterpartyPartner[];
  }
}
