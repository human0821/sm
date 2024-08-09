import ValidationErrors from "@/shared/consts/validationErrors";
import { VALIDATION_PASSWORD } from "@/shared/consts/validationPatterns";

import { rolesSelectOptions } from "./roles";
import { SELECT_OPTIONS_NEWS_TYPE } from "./selectOptionsNewsType";
import { Joi } from "../utils/joi";

export const FIELDS = {
  /** Почта */
  email: {
    name: "email",
    placeholder: "example@example.com",
    label: "Электронная почта",
    validation: {
      pattern: {
        value: /[\S-_]+@\S+\.\S+/,
        message: "Неверный адрес электронной почты",
      },
    },
  },

  /** Телефон */
  phone: {
    name: "phoneNumber",
    placeholder: "+7 (ХХХ) ХХХ-ХХХХ",
    label: "Телефон",
    validation: {
      minLength: {
        value: 11,
        message: "Минимум 11 символов",
      },
      pattern: {
        value: /^\+7 \(\d{3}\) \d{3}-\d{4}$|^\s*$/,
        message: "Не корректный формат номера телефона",
      },
    },
  },

  password: {
    name: "password",
    placeholder: "••••••••••••",
    validation: {
      minLength: {
        value: VALIDATION_PASSWORD.minLength,
        message: `Пароль должен быть не меньше ${VALIDATION_PASSWORD.minLength} символов`,
      },
      maxLength: {
        value: VALIDATION_PASSWORD.maxLength,
        message: `Пароль должен быть не более ${VALIDATION_PASSWORD.maxLength} символов`,
      },
      pattern: {
        value: VALIDATION_PASSWORD.regExp,
        message: ValidationErrors.INCORRECT,
      },
    },
  },

  /** Название магазина */
  nameShop: {
    name: "name",
    placeholder: "Введите название вашего магазина",
    label: "Название магазина",
  },

  /** Текстовое описание магазина*/
  shopDescription: {
    name: "description",
    placeholder: "Введите информацию о вашем магазине",
    label: "Текстовое описание",
    helperText: "100 символов",
    validation: {
      maxLength: {
        value: 100,
        message: "Слишком длинное описание, максимум 100 символов",
      },
    },
  },

  vkLink: {
    name: "vkLink",
  },

  okLink: {
    name: "okLink",
  },

  tgLink: {
    name: "tgLink",
  },

  /** Ссылка на соцсеть */
  link: (name: string) => ({
    name,
    placeholder: "Ссылка",
    validation: {
      pattern: {
        value: /^https:\/\/\S+\.(\w){2,6}(?:\/\S*)?$/,
        message: "Не верный формат ссылки",
      },
    },
  }),

  /** Допустимые скидки для продавцов, % */
  discountsSellers: {
    name: "",
    validation: {
      min: {
        value: 0,
        message: "Мин. 0%",
      },
      max: {
        value: 100,
        message: "Макс. 100%",
      },
      pattern: {
        value: /^\d+$/,
        message: "Только числа",
      },
    },
  },

  /** Наценка на товары, % */
  markupPrice: {
    name: "markup",
    placeholder: "Наценка по умолчанию",
    label: "Наценка по умолчанию, %",
    validation: {
      min: {
        value: 0,
        message: "Мин. 0%",
      },
      max: {
        value: 99,
        message: "Макс. 99%",
      },
      pattern: {
        value: /^\d+$/,
        message: "Только числа",
      },
    },
    flyValidation: Joi.alternatives().try(Joi.number(), Joi.string().valid("")),
  },

  /** Поиск по брендам */
  searchBrand: {
    placeholder: "Поиск",
    name: "searchBrand", // TODO: rename
  },

  /** Поиск по записям (новости) */
  searchNews: {
    placeholder: "Поиск по записям",
    name: "search",
  },

  /** Даты публикации */
  datePublish: {
    name: "datePublish",
    placeholder: "Дата публикации",
    label: "Дата публикации",
    validation: {
      required: ValidationErrors.REQUIRED,
    },
  },

  dateFinish: {
    name: "dateFinish",
    placeholder: "Дата окончания",
    label: "Дата окончания",
    validation: {
      required: ValidationErrors.REQUIRED,
    },
  },

  /** Тип новости */
  newsType: {
    name: "newsType",
    label: "Тип записи",
    placeholder: "Тип записи",
    options: SELECT_OPTIONS_NEWS_TYPE,
    validation: {
      required: ValidationErrors.REQUIRED,
    },
  },

  /** Видимость (роли) */
  roles: {
    name: "roles",
    label: "Видимость",
    placeholder: "Выберите из списка",
    validation: {
      required: ValidationErrors.REQUIRED,
    },
  },

  /** Заголовок новости */
  header: {
    name: "header",
    placeholder: "Название",
    validation: {
      required: ValidationErrors.REQUIRED,
    },
  },

  /**Варианты ответа Опроса */
  answers: {
    name: "answers",
    placeholder: "Добавить вариант",
  },

  fullName: {
    name: "fullName",
    placeholder: "Введите ФИО",
    label: "ФИО",
  },

  name: {
    name: "name",
    label: "Название",
    validation: {
      required: ValidationErrors.REQUIRED,
    },
  },

  internalLink: {
    name: "link",
    label: "Ссылка",
    placeholder: "Введите адрес перехода",
    validation: {
      required: ValidationErrors.REQUIRED,
    },
  },

  question: {
    name: "question",
    placeholder: "Введите текст",
    label: "Текст вопроса",
  },
  answer: {
    name: "answer",
    placeholder: "Введите текст",
    label: "Текст ответа",
  },

  privilegy: {
    name: "privilegy1",
    placeholder: "Введите привилегию",
  },

  file: {
    name: "file",
    validation: {
      required: ValidationErrors.REQUIRED,
    },
  },
  checkNumberDigits: (name: string, num: number) => ({
    required: `${name} должен состоять из ${num} цифр`,
    maxLength: {
      value: num,
      message: `${name} должен состоять из ${num} цифр`,
    },
    minLength: {
      value: num,
      message: `${name} должен состоять из ${num} цифр`,
    },
  }),
  onlyNumber: (value: string) => value.replace(/\D/g, ""),
} as const satisfies Record<string, Field>;
