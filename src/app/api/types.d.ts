declare namespace Api {
  interface ResponseWithPagePaginate<T> {
    items: T[];
    page: number;
    pages: number;
    size: number;
    total: number;
  }

  interface ErrorDetail {
    msg: string;
  }

  interface ResponseError {
    data: {
      detail: string | ErrorDetail[];
    };
    status: number;
  }
}

/** Тип для извлечения типа параметра функции api */
declare namespace ApiRTK {
  type RequestMutationLazy<T> = Parameters<ReturnType<T>[0]>[0];
  type RequestQuery<T> = Parameters<T>[0];
  type ResponseMutation<T> = ReturnType<T>[1]["originalArgs"];
}
