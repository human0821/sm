const enum ValidationErrors {
  REQUIRED = "Обязательно для заполнения",
  INCORRECT = "Некорректное значение",
  EMAIL = "Необходимо указать корректный E-mail",
  UNEXPECTED = "Что-то пошло не так",
  LOGIN = "Необходимо авторизоваться",
  SAME_PASSWORD = "Пароли должны совпадать",
  DIFFERENT_PASSWORD = "Пароли не должны совпадать",
  REAUTH_ERROR = "Повторите авторизацию",
  EXPIRED_TOKEN = "Истек срок действия токена",
}

export default ValidationErrors;
