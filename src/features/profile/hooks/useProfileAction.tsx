import type { ModalEntity } from "@/entities/modal/types";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { useSaveLastLinkMutation } from "@/app/api/user/api";
import Routes from "@/app/routes/consts/routes";
import { setModal } from "@/app/store/app/slice";
import { logout as userLogout } from "@/app/store/user/slice";
import { ModalDialogEntity, ModalDialogTypes } from "@/entities/modal";

export function useProfileAction() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [saveLastLink, saveLastLinkState] = useSaveLastLinkMutation();

  useEffect(() => {
    if (saveLastLinkState.isSuccess || saveLastLinkState.isError) {
      console.log("done", saveLastLinkState);
      dispatch(userLogout());
      navigate(Routes.AUTH_LOGIN_PAGE);
    }
    if (saveLastLinkState.isError) {
      console.log("here", saveLastLinkState);
      // dispatch(userLogout());
      // navigate(Routes.AUTH_LOGIN_PAGE);
    }
  }, [saveLastLinkState]);

  const logout = () => {
    saveLastLink(`${location.pathname}${location.search}${location.hash}`);
  };

  const switchAccountProps: ModalEntity.Dialog = {
    title: "При смене пользователя все данные будут потеряны",
    type: ModalDialogTypes.QUESTION,
    buttons: [
      {
        children: "Нет",
        type: "button",
        variant: "contained",
        onClick: () => dispatch(setModal({ show: false })),
      },
      {
        children: "Да",
        type: "button",
        variant: "outlined",
        onClick: () => {
          dispatch(setModal({ show: false }));
          logout();
        },
      },
    ],
  };

  const switchAccount = () => {
    dispatch(
      setModal({
        show: true,
        component: <ModalDialogEntity {...switchAccountProps} />,
      }),
    );
  };

  const profileNavigate = () => {
    navigate(Routes.PROFILE_PAGE);
  };

  return {
    logout,
    switchAccount,
    profileNavigate,
  };
}
