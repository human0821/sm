import type { AccountCounterPartyAddSchema, CounterpartyAddSchema } from "@/app/api/apiGenerator/common/counterpartyApi";

import { counterpartyType } from "./counterpartyType";

export const defaultFormBank: AccountCounterPartyAddSchema = {
  bik: "",
  checkingAccount: "",
  bank: "",
  corrAccount: "",
};

const defaultForm: CounterpartyAddSchema = {
  counterpartyType: counterpartyType.legal,
  inn: "",
  name: "",
  shortName: "",
  legalAddress: "",
  actualAddress: "",
  mailingAddress: "",
  phone: "",
  email: "",
  documentFlow: "",
  taxSystem: "" as CounterpartyAddSchema["taxSystem"],
  accounts: [defaultFormBank],
};

export const defaultFormLLC: CounterpartyAddSchema = {
  ...defaultForm,
  director: "",
  chiefAccountant: "",
  psrn: "",
  kpp: "",
};

export const defaultFormSoleProprietor: CounterpartyAddSchema = {
  ...defaultForm,
  ogrnip: "",
};
