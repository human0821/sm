import { type SubmitHandler } from "react-hook-form";

import { employeesApi } from "@/app/api/apiGenerator/common";
import { useRTKAlert } from "@/shared/hooks/useRTKAlert";

export function useEmployeeChangePassword({
  id,
}: {
  setError: React.Dispatch<React.SetStateAction<ChangePasswordForm["error"]>>;
  id?: string;
}) {
  // PATCH METHOD API :)
  const [changePassword, { isLoading, isSuccess }] = employeesApi.useActivateDeactivateEmployeeMutation();
  const alert = useRTKAlert();

  const onSubmit: SubmitHandler<AuthChangePasswordForm> = (data) => {
    if (id)
      changePassword({ employeeActiveSchema: { password: data.newPassword }, employeeId: id }).then(
        alert("Пароль успешно изменени", (error) =>
          typeof error?.data?.detail === "string"
            ? error.data?.detail
            : error.data?.detail[0].msg || "При выполнении запроса что-то пошло не так",
        ),
      );
  };

  return {
    onSubmit,
    isFetching: isLoading,
    isSuccess,
  };
}
