import type { MouseEvent } from "react";

import { Box, Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

import Routes from "@/app/routes/consts/routes";
import { useAppDispatch } from "@/app/store";
import { designActions } from "@/app/store/site-design-settings/slice";
import { mediaQueryHelp } from "@/app/styles/functions";

import { PreviewButtonWrap, PreviewDesignButtonBack } from "./PreviewButton.styled";

export function PreviewButton() {
  const navigate = useNavigate(),
    dispatch = useAppDispatch();
  const disableEditMode = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    dispatch(designActions.setEditMode(false));
    dispatch(designActions.setResetForm(false));
    navigate(Routes.ACCOUNT_SITE_SETTINGS_PAGE);
  };

  return (
    <PreviewButtonWrap>
      <Box>
        <Button variant="contained" sx={mediaQueryHelp({ padding: { xs: "16px" } })}>
          <Stack
            width={"100%"}
            gap={"12px"}
            alignItems={"center"}
            sx={mediaQueryHelp({
              justifyContent: { xs: "center", s: "space-between" },
              flexDirection: { xs: "column", s: "row" },
            })}>
            <Box sx={mediaQueryHelp({ textAlign: { xs: "center", s: "left" } })}>Предпросмотр главной страницы</Box>
            <PreviewDesignButtonBack onClick={disableEditMode}>Вернуться к настройке</PreviewDesignButtonBack>
          </Stack>
        </Button>
      </Box>
    </PreviewButtonWrap>
  );
}
