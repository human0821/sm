import type { ReactNode } from "react";

import { useSnackbar } from "notistack";

/** Универсальный хук который показывает всплывающие уведомления на сайте.
 * Он принимает в себя success и error, и возвращает функцию, которая принимает данные с сервера.
 * Ошибка может быть функцией, в параметры которой она принимает ошибку.
 */
export function useRTKAlert() {
  const { enqueueSnackbar } = useSnackbar();

  return (success: ReactNode, error: ReactNode | ((x: any) => string)) => (data: any) => {
    if ("data" in data && success) enqueueSnackbar(success, { variant: "success" });
    if ("error" in data && error) {
      typeof error === "function"
        ? enqueueSnackbar(error(data.error), { variant: "error" })
        : enqueueSnackbar(error, { variant: "error" });
    }
  };
}
