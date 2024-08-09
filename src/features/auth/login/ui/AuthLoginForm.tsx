import { Link, Stack, TextField } from "@mui/material";
import { useMemo } from "react";

import Routes from "@/app/routes/consts/routes";
import { ArrowRightIcon } from "@/assets/icons";
import LocalStorage from "@/shared/consts/localStorage";
import { FormFields, Form } from "@/shared/ui/Auth/Auth.styled";
import { AuthProfileSelect } from "@/shared/ui/Auth/Profile/Select/AuthProfileSelect";
import { ButtonLoading } from "@/shared/ui/Button/Loading/ButtonLoading";
import FormInput from "@/shared/ui/Form/Input/FormInput";
import InputPassword from "@/shared/ui/Input/Password/InputPassword";

import { LinkWrapper } from "./AuthLoginForm.styled";
import { useAuthLogin } from "../hooks/useAuthLogin";

export function AuthLoginForm({ canSelectProfile }: { canSelectProfile?: boolean }) {
  const {
    control,
    handleSubmit,
    errors,
    onSubmit,
    validationRules,
    isSubmitDisabled,
    profiles,
    getValues,
    setValue,
    isFetching,
    clearErrors,
  } = useAuthLogin({ isNeedGetEmail: canSelectProfile });

  const handleProfileChange = (profile: StoreUser.User) => {
    if (profile.email !== getValues("email")) {
      setValue("email", profile.email);
      clearErrors("email");
    }
  };

  const emailInput = useMemo(() => {
    if (canSelectProfile && profiles.length) {
      return <AuthProfileSelect profiles={profiles} onChange={handleProfileChange} error={errors.email} />;
    } else {
      return (
        <FormInput
          controllerProps={{
            name: "email",
            control,
            rules: validationRules.email,
          }}
          error={errors.email}
          input={<TextField name="email" label="Электронная почта" placeholder="example@example.com" />}
        />
      );
    }
  }, [profiles]);

  const navigateToResetPassword = () => {
    if (location.pathname === Routes.AUTH_ADD_PROFILE_PAGE && getValues("email").length === 0) {
      // Если мы на странице добавления пользователя, и не заполняли email то удаляем закешированный email из прошлых форм
      // Чтобы при переходе на "Забыли пароль" не было значения из страницы выбора профиля. ¯\_(ツ)_/¯
      localStorage.removeItem(LocalStorage.LOGIN_EMAIL);
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Stack gap={2.5}>
        <FormFields>
          {emailInput}
          <FormInput
            controllerProps={{
              name: "password",
              control,
              rules: validationRules.password,
            }}
            error={errors.password}
            input={<InputPassword autoComplete="new-password" label="Пароль" placeholder="••••••••••••" />}
          />
        </FormFields>
        <LinkWrapper>
          <Link
            sx={{ fontSize: "1rem" }}
            underline="hover"
            href={Routes.AUTH_RESET_PASSWORD_PAGE}
            onClick={navigateToResetPassword}>
            Забыли пароль?
          </Link>
        </LinkWrapper>
      </Stack>
      <ButtonLoading
        type="submit"
        sx={{ justifyContent: "space-between" }}
        variant="contained"
        endIcon={<ArrowRightIcon />}
        disabled={isSubmitDisabled}
        loading={isFetching}
        onSubmit={handleSubmit(onSubmit)}>
        Войти
      </ButtonLoading>
    </Form>
  );
}
