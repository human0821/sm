import type { BannerSchema } from "@/app/api/apiGenerator/admin/bannersAdminApi";

import { Stack, Box, TextField, Switch, Button, Skeleton } from "@mui/material";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import { Functions } from "@/app/styles";
import { ModalDialogTypes } from "@/entities/modal";
import { DeleteBannerButton } from "@/features/administration";
import { BUNNER_CREATE, BUNNER_EDIT } from "@/shared/consts/content";
import { FIELDS } from "@/shared/consts/fields";
import { motionFade } from "@/shared/consts/motion";
import { MAX_FILES_SIZE_MB } from "@/shared/consts/validationPatterns";
import { ButtonLoading } from "@/shared/ui/Button/Loading/ButtonLoading";
import CustomDialog from "@/shared/ui/DialogBox/DialogBox";
import { MediaUploader } from "@/shared/ui/MediaUploader";
import { fieldRegister } from "@/shared/utils/fieldRegister";

import { CreateCardWrap, CreateWrap, SwitchWrapper, ButtonsWrapper, Title, FieldsWrapper } from "./BannerForm.styled";
import { useBannerForm } from "../hooks/useBannerForm";

export function BannerForm({ data }: { data?: BannerSchema }) {
  const {
    form,
    submit,
    isLoading,
    showSuccess,
    hideSuccess,
    changeImage,
    currentImage,
    setCurrentImage,
    imageError,
    setImageError,
  } = useBannerForm({
    id: data?.id,
  });

  const [isInit, setIsInit] = useState(false);

  useEffect(() => {
    if (data) {
      setCurrentImage({ link: data.file, file: null });
      form.setValue("name", data.name);
      form.setValue("link", data.link);
      form.setValue("active", data.active);
    }
    setTimeout(() => {
      setIsInit(true);
    }, 10);
  }, [data]);

  return (
    <CreateWrap>
      <form onSubmit={form.handleSubmit(submit)}>
        <Stack alignItems={"center"} gap={3}>
          <CreateCardWrap>
            <Title variant="h1">{data ? BUNNER_EDIT : BUNNER_CREATE}</Title>
            <Stack gap={5}>
              {isInit ? (
                <motion.div {...motionFade} key="content">
                  <Box height={"clamp(200px, 12vw, 250px)"}>
                    <MediaUploader
                      initialImage={currentImage.link}
                      accept="video/*, image/*"
                      onChange={changeImage}
                      text="Загрузить фото или видео"
                      error={imageError}
                      setError={setImageError}
                      maxSize={{ video: MAX_FILES_SIZE_MB[250] }}
                    />
                  </Box>
                </motion.div>
              ) : (
                <motion.div {...motionFade} key="loader">
                  <Skeleton height={250} width="100%" />
                </motion.div>
              )}
              <FieldsWrapper>
                <TextField {...fieldRegister(form, FIELDS.name)} placeholder="Введите название баннера" />
                <TextField {...fieldRegister(form, FIELDS.internalLink)} />
              </FieldsWrapper>
              {isInit && (
                <SwitchWrapper
                  control={
                    <Switch sx={{ m: 1 }} defaultChecked={data ? data?.active : true} {...form.register("active", {})} />
                  }
                  label="Показывать баннер на сайте (активность)"
                  labelPlacement="start"
                />
              )}
            </Stack>
          </CreateCardWrap>
          <ButtonsWrapper>
            {data && <DeleteBannerButton id={data.id} />}
            <ButtonLoading
              variant="contained"
              sx={
                data
                  ? { width: "100%" }
                  : { ml: "auto", ...Functions.mediaQueryHelp({ minWidth: { xs: "100%", m: "50%" } }) }
              }
              type="submit"
              loading={isLoading}>
              {data ? "Cохранить изменения" : "Создать баннер"}
            </ButtonLoading>
          </ButtonsWrapper>
        </Stack>

        <CustomDialog
          type={ModalDialogTypes.SUCCESS}
          open={showSuccess}
          actions={
            <Button onClick={hideSuccess} sx={{ flexGrow: 1 }} variant="contained">
              Закрыть
            </Button>
          }>
          {data ? "Баннер сохранен" : "Баннер опубликован"}
        </CustomDialog>
      </form>
    </CreateWrap>
  );
}
