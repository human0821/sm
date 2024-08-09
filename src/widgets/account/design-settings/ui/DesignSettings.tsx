import { Box, Card, Skeleton, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { useGetAllColorsSchemesQuery, useGetDesignSchemaQuery } from "@/app/api/partners/api";
import { useAppSelector } from "@/app/store";
import { mediaQueryHelp } from "@/app/styles/functions";
import { ModalDialogTypes } from "@/entities/modal";
import { ButtonLoading } from "@/shared/ui/Button/Loading/ButtonLoading";
import CustomDialog from "@/shared/ui/DialogBox/DialogBox";
import { MediaUploader } from "@/shared/ui/MediaUploader";

import { ColorCardSelect, GrayText, WrapImageUploader } from "./DesignSettings.styles";
import { useSetThemeAndImages } from "../hooks/useSetThemeAndImages";

export const DesignSettings = () => {
  const {
      changeImage: changeLogo,
      onCloseModal,
      setColorSchema,
      deleteImage: onConfirmModal,
      currentDeleteImage,
      submit,
      uploadDesignImagesQuery,
    } = useSetThemeAndImages(),
    userId = useSelector((state: any) => state.user.user?.id),
    design = useGetDesignSchemaQuery(userId, { skip: !userId }),
    colors = useGetAllColorsSchemesQuery(),
    [key, setKey] = useState(0),
    designStore = useAppSelector((state) => state.design),
    isDirty = useAppSelector((state) => state.design.isDirty);

  useEffect(() => {
    if (!design.isLoading && !key) {
      setKey(key + 1);
    }
  }, [design.isLoading]);

  const height = mediaQueryHelp({ height: { xs: "196px", xl: "250px" } });

  return (
    <Stack gap={2}>
      <Card>
        <form onSubmit={submit}>
          <Stack gap={"20px"}>
            <Typography variant="h3" sx={mediaQueryHelp({ marginBottom: { xl: "20px" } })}>
              Оформление сайта
            </Typography>
            <GrayText sx={{ lineHeight: 1 }}>Выберите тему оформления</GrayText>

            <Stack gap={"10px"} direction={"row"} flexWrap={"wrap"} minHeight={64}>
              {colors.data
                ? Object.values(colors.data || {}).map((color) => (
                    <ColorCardSelect
                      key={color}
                      onClick={() => setColorSchema(color)}
                      $pointcolor={color}
                      $isSelected={designStore.selectedColor === color}
                    />
                  ))
                : Array(6)
                    .fill(0)
                    .map((_, index) => <Skeleton height={64} width={64} key={index} />)}
            </Stack>

            <WrapImageUploader>
              <Box sx={height} flexGrow={1}>
                <MediaUploader
                  key={key}
                  initialImage={designStore.previewImagesLink.logo ?? design.data?.logo ?? ""}
                  onChange={(file, res, rej) => changeLogo(file, res, rej, "logo")}
                  text={
                    <Box textAlign={"center"}>
                      Загрузить
                      <Box
                        component={"br"}
                        sx={mediaQueryHelp({ display: { xs: "none", s: "block", m: "none", xl: "block" } })}
                      />
                      логотип
                    </Box>
                  }
                />
              </Box>
              <Box sx={height} flexGrow={1}>
                <MediaUploader
                  key={key}
                  initialImage={designStore.previewImagesLink.header ?? design.data?.header ?? ""}
                  onChange={(file, res, rej) => changeLogo(file, res, rej, "header")}
                  text={
                    <Box textAlign={"center"}>
                      Загрузить обложку <br /> для шапки
                    </Box>
                  }
                />
              </Box>

              <Box sx={height} width={"100%"}>
                <MediaUploader
                  key={key}
                  initialImage={designStore.previewImagesLink.side ?? design.data?.side ?? ""}
                  onChange={(file, res, rej) => changeLogo(file, res, rej, "side")}
                  text={
                    <Box textAlign={"center"}>
                      Загрузить обложку <br /> для бокового меню
                    </Box>
                  }
                />
              </Box>
            </WrapImageUploader>

            <ButtonLoading
              loading={uploadDesignImagesQuery.isLoading}
              disabled={!isDirty}
              type="submit"
              variant="contained"
              sx={mediaQueryHelp({ marginTop: ["", "", "", "", "20px"] })}>
              Сохранить
            </ButtonLoading>
          </Stack>
        </form>
      </Card>

      <CustomDialog
        type={ModalDialogTypes.DELETE}
        open={!!currentDeleteImage}
        onConfirm={onConfirmModal}
        onNotConfirm={onCloseModal}
        onClose={onCloseModal}>
        <>
          Вы уверены, что хотите <br /> удалить фото?
        </>
      </CustomDialog>
    </Stack>
  );
};
