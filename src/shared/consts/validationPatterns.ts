export const VALIDATION_PATTERN_EMAIL = /\S+@\S+\.\S+/;
export const VALIDATION_PASSWORD = {
  minLength: 8,
  maxLength: 22,
  symbols: "!@#$%^&*.-_",
  regExp: /^(?=.*[A-Z])(?=.*\d)[A-Za-z0-9!@#$%^&*.\-_]*$/,
};
export const VALIDATION_PHOTO_FORMATS = ["jpg", "jpeg", "gif", "png", "bmp"];
export const VALIDATION_VIDEO_FORMATS = ["mp4", "mpeg", "avi"];

export const VALIDATION_LINK = {
  regExp: /^https?:\/\/\w+\.\w+$/,
};

/** Валидаторы для полей форм ввода на "лету" */
export const FLY_FIELD_VALIDATORS = {
  phone: (x: string) => /^(\+7?)?[ \d]*$/.test(x),
  email: (x: string) => /^[\d\w\s-_@.]*$/.test(x),
  numbers: (x: string) => /^[0-9]*$/.test(x),
};

export const MAX_FILES_SIZE_MB = {
  150: 157286400.07,
  250: 262144000.11,
};
