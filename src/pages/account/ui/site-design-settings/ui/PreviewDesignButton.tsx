import type { ReactNode } from "react";

import { useNavigate } from "react-router-dom";

import Routes from "@/app/routes/consts/routes";
import { useAppDispatch, useAppSelector } from "@/app/store";
import { designActions } from "@/app/store/site-design-settings/slice";

import { FlexBoxPreviewButton, WrapPreviewButton } from "./AccountSiteDesignSettingsPage.styles";

export const PreviewDesignButton = ({ text = "Предпросмотр сайта", id }: { text?: ReactNode; id?: string }) => {
  const navigate = useNavigate(),
    dispatch = useAppDispatch(),
    isPreview = useAppSelector((s) => s.design.isPreview);

  const enablePreviewMode = () => {
    window.scrollTo(0, 0);
    dispatch(designActions.setEditMode(true));
    navigate(Routes.DASHBOARD_PAGE);
  };

  return (
    <WrapPreviewButton onClick={enablePreviewMode} variant={"contained"} id={id}>
      <FlexBoxPreviewButton isPreview={isPreview}>
        <div>{text}</div>
      </FlexBoxPreviewButton>
    </WrapPreviewButton>
  );
};
