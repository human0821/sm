import { VALIDATION_VIDEO_FORMATS } from "../consts/validationPatterns";

export const camelize = (source: string): string => {
  return source.replace(/([-_][a-z])/gi, ($1) => $1.toUpperCase().replace("-", "").replace("_", ""));
};

export const objectKeysToCamel = (sourceObj: Record<string, any>) => {
  const transformObj: Record<string, any> = {};
  Object.keys(sourceObj).forEach((key) => {
    if (sourceObj[key] && typeof sourceObj[key] === "object") {
      if (Array.isArray(sourceObj[key])) {
        transformObj[camelize(key)] = sourceObj[key].map((item: Record<string, any>) => objectKeysToCamel(item));
      } else {
        const subObject = objectKeysToCamel(sourceObj[key]);
        transformObj[camelize(key)] = subObject;
      }
    } else {
      transformObj[camelize(key)] = sourceObj[key];
    }
  });
  return transformObj;
};

export const getShortFullName = (fullName: unknown): string => {
  if (typeof fullName === "string") {
    const [surname, firstName, lastName] = fullName.split(" ");
    return `${surname} ${firstName ? `${firstName[0]}.` : ""} ${lastName ? `${lastName[0]}.` : ""}`.trim();
  }

  return "";
};

export const getIsVideoByUrl = (source: string) => {
  const extension = source.split(".").pop();

  return extension && VALIDATION_VIDEO_FORMATS.includes(extension.toLowerCase());
};

export function convertToRouble(value: number): string {
  return new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
    minimumFractionDigits: 0,
  }).format(value);
}

/** 100000 => 100 000 */
export function splitNumber(value: number | string): string | number {
  const result = convertToRouble(+value).slice(0, -2);
  return result.includes("число") ? value : result;
}

export function getClientShortDate(date: Date | string | number): string {
  return new Date(date).toLocaleDateString("ru-RU", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  });
}

export function formatPhone(phone: string, plus = true) {
  const startsWith = plus ? "+7" : "8";

  let newPhone = phone.replace(/[^0-9]/g, "");
  if (newPhone.startsWith("7") && plus) {
    newPhone = newPhone.substr(1);
  }
  if (newPhone.startsWith("8")) {
    newPhone = newPhone.substr(1);
  }

  return newPhone.replace(/(\d{3})(\d{3})(\d{2})(\d{2})/g, `${startsWith} ($1) – $2 – $3 – $4`);
}

//* Функция удаляет лишние пробелы по краям, а так же двойные пробелы */
export const trimMultipleSpaces = (value = ""): string => value?.trim().replaceAll(/\s+/g, " ") || "";

export const declinationOfNumber = (number: number, wordForms: string[]) => {
  const n = Math.abs(number) % 100;
  const n1 = n % 10;

  if (n > 10 && n < 20) {
    return wordForms[2];
  }
  if (n1 > 1 && n1 < 5) {
    return wordForms[1];
  }
  if (n1 === 1) {
    return wordForms[0];
  }
  return wordForms[2];
};

export const checkDash = (value: string) => {
  return value.length > 0 ? value : "—";
};

export const generateUniqueId = () => `id-${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
