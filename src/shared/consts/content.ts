import { VALIDATION_PASSWORD } from "./validationPatterns";

// TODO: Объединить все в одну переменную
export const CONTENT_PASSWORD_RULES = `Пароль должен включать буквы (A-Z), цифры(0-9) и иметь длину от ${VALIDATION_PASSWORD.minLength} до ${VALIDATION_PASSWORD.maxLength} символов. Так же пароль может включать в себя следующие символы: ${VALIDATION_PASSWORD.symbols}`;
export const CONTENT_ROLE_DEFAULT = "Партнер";
export const CONTENT_FOR_ALL = "Для всех";
export const SEARCH_NO_RESULTS = "Поиск не дал результатов";
export const BACK = "Назад";
export const COUNTERPARTIES = "Контрагенты";
export const FAQ = "Вопросы и ответы";
export const ACCOUNT_ADMINISTRATION = "Администрирование аккаунта";
export const SYSTEM_ADMINISTRATION = "Администрирование системы";
export const BUNNER_MANAGMENT = "Управление баннерами";
export const BUNNER_CREATE = "Создание баннера";
export const BUNNER_EDIT = "Редактирование баннера";
export const MAIN = "Главная";
export const IMPORTANT = "Важно";
