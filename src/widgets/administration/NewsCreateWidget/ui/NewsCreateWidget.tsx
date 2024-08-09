import type { ApiV1NewsPost } from "@/app/api/apiGenerator/admin/newsAdminApi";
import type { UseFormReturn } from "react-hook-form";

import { Stack, Typography, Box, TextField } from "@mui/material";
import { useRef, useState } from "react";

import { mediaQueryHelp } from "@/app/styles/functions";
import { ModalDialogTypes } from "@/entities/modal";
import { FIELDS } from "@/shared/consts/fields";
import CustomDialog from "@/shared/ui/DialogBox/DialogBox";
import { MediaUploader } from "@/shared/ui/MediaUploader";
import { SwitchWithLabel } from "@/shared/ui/SwitchWithLabel";
import { Wysiwyg } from "@/shared/ui/WYSIWYG";
import { fieldRegister } from "@/shared/utils/fieldRegister";

import { NewsCreateCardWrap } from "./NewsCreateWidget.styles";
import { newsSwitchTags } from "../const";

export function NewsCreateWidget({ form }: { form: UseFormReturn<ApiV1NewsPost> }) {
  const [delImage, setDelImage] = useState(false),
    resolveRef = useRef<UploadImages["resolve"]>();

  return (
    <NewsCreateCardWrap>
      <Stack gap={5}>
        <Typography variant="h3">Новость</Typography>

        <Box height={"clamp(200px, 12vw, 250px)"}>
          <MediaUploader
            initialImage=""
            onChange={(f, res) => {
              if (!f) {
                resolveRef.current = res;
                setDelImage(true);
                return;
              }
              res(URL.createObjectURL(f));
              form.setValue("banner", f as Blob);
            }}
            text="Загрузить фото или видео"
          />
        </Box>

        <TextField {...fieldRegister(form, FIELDS.header)} />

        <Wysiwyg
          placeholder="Текст новости"
          onChange={(x) => form.setValue("text", x)}
          defaultValue={form.getValues().text || ""}
        />

        <Stack sx={mediaQueryHelp({ gap: { xs: "16px", m: "20px" } })}>
          {newsSwitchTags.map((v) => (
            <SwitchWithLabel
              key={v.value}
              checked={form.getValues()[v.value] || false}
              onChange={(x) => form.setValue(v.value, x)}
              label={v.label}
            />
          ))}
        </Stack>
      </Stack>

      <CustomDialog
        type={ModalDialogTypes.DELETE}
        onClose={() => setDelImage(false)}
        open={delImage}
        onNotConfirm={() => setDelImage(false)}
        onConfirm={() => {
          resolveRef.current?.("");
          setDelImage(false);
          form.setValue("banner", undefined);
        }}>
        Вы действительно хотите удалить изображение?
      </CustomDialog>
    </NewsCreateCardWrap>
  );
}
