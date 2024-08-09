// LEGAL - юридическое лицо
// INDIVIDUAL - ИП
type DadataInnType = "LEGAL" | "INDIVIDUAL";

interface ApiDadataInnSuggestion {
  value: string;
  unrestricted_value: string;
  data: {
    inn: string;
    fio: {
      // Полное название/Сокращенное название (INDIVIDUAL)
      name: string;
      surname: string;
    };
    kpp: string; // КПП (LEGAL)
    ogrn: string | null; // ОГРНИП (INDIVIDUAL)
    name: {
      full_with_opf: string; // Полное название (LEGAL)
      short_with_opf: string; // Сокращенное название (LEGAL)
    };
    address: {
      // Юридический адрес
      value: string;
    };
    management: {
      // Имя директора (LEGAL)
      name: string;
    };
    managers:
      | null
      | {
          // Главный бухгалтер (LEGAL)
          fio: {
            surname: string;
            name: string;
          };
        }[];
    emails:
      | null
      | {
          // email
          value: string;
        }[];
    phones:
      | null
      | {
          // Номер телефона
          value: string;
        }[];
  };
}

interface ApiDadataInnRequest {
  query: string;
  count?: number;
  kpp?: string;
  branch_type?: string;
  type: DadataInnType;
}

interface ApiDadataInnResponse {
  suggestions: ApiDadataInnSuggestion[];
}

interface ApiDadataBikSuggestion {
  value: string;
  data: {
    bic: string;
    correspondent_account: string;
  };
}

interface ApiDadataBikRequest {
  query: string;
  count?: number;
}

interface ApiDadataBikResponse {
  suggestions: ApiDadataBikSuggestion[];
}
