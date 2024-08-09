/** Функция преобразования в FormData с особым типом! Используйте для авто-АПИ для избежания конфликта типа */
export function createFormData<T extends Record<string, any>>(data: T): T {
  const formData = new FormData();

  Object.entries(data).forEach(([key, value]) => {
    formData.append(key, value);
  });

  return formData as unknown as T;
}
