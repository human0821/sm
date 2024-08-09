import { Button } from "@mui/material";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

import Routes from "@/app/routes/consts/routes";
import { ArrowRightIcon } from "@/assets/icons";
import { AuthSuccessMessage } from "@/entities/auth/success";

export function AuthChangePasswordSuccessPage() {
  const navigation = useNavigate();
  return (
    <>
      <Helmet>
        <title>Смена пароля</title>
      </Helmet>
      <AuthSuccessMessage title="Успешно" description="Пароль успешно изменен. Войдите в систему с помощью новых данных" />
      <Button
        type="submit"
        sx={{ justifyContent: "space-between" }}
        variant="contained"
        endIcon={<ArrowRightIcon />}
        onClick={() => navigation(Routes.AUTH_LOGIN_PAGE)}>
        Войти
      </Button>
    </>
  );
}
