import type { ApiV1NewsPost } from "@/app/api/apiGenerator/admin/newsAdminApi";
import type { ChangeEvent } from "react";
import type { UseFormReturn } from "react-hook-form";

import { Stack, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { v4 } from "uuid";

import { mediaQueryHelp } from "@/app/styles/functions";
import { CloseIcon, PlusBorderlessIcon } from "@/assets/icons";
import { FIELDS } from "@/shared/consts/fields";
import { SwitchWithLabel } from "@/shared/ui/SwitchWithLabel";
import { fieldRegister } from "@/shared/utils/fieldRegister";

import { NewsCreateCardWrap } from "../../NewsCreateWidget/ui/NewsCreateWidget.styles";
import { surveySwitchTags } from "../const";

export function SurveyWidget({ form }: { form: UseFormReturn<ApiV1NewsPost> }) {
  const [variants, setVariants] = useState<{ id: string; text: string }[]>([{ id: v4(), text: "" }]);
  form.watch("freeAnswerFlag");

  useEffect(() => {
    form.setValue("answers", variants.map((v) => v.text).join(","));
  }, [variants]);

  function onChangeVariants(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, i: number) {
    setVariants((x) => {
      x[i].text = e.target.value;
      if (i === x.length - 1) x.push({ id: v4(), text: "" });
      return [...x];
    });
  }

  return (
    <NewsCreateCardWrap>
      <Stack gap={5}>
        <Typography variant="h3">Опрос</Typography>

        <TextField {...fieldRegister(form, FIELDS.header)} />

        <Typography variant="h4">Варианты ответа</Typography>

        <Stack sx={mediaQueryHelp({ gap: { xs: "16px", m: "20px" } })}>
          {variants.map((v, i) => (
            <TextField
              placeholder="Вариант ответа"
              onChange={(e) => onChangeVariants(e, i)}
              key={v.id}
              InputProps={{
                endAdornment:
                  variants.length > 1 && variants.length - 1 !== i ? (
                    <CloseIcon onClick={() => setVariants((x) => x.filter((z) => z.id !== v.id))} />
                  ) : (
                    <PlusBorderlessIcon onClick={() => setVariants((x) => (x.push({ id: v4(), text: "" }), [...x]))} />
                  ),
              }}
            />
          ))}
        </Stack>

        <Stack sx={mediaQueryHelp({ gap: { xs: "16px", m: "20px" } })}>
          {surveySwitchTags.map((v) => (
            <SwitchWithLabel key={v.value} label={v.label} onChange={(x) => form.setValue(v.value, x)} />
          ))}
        </Stack>
      </Stack>
    </NewsCreateCardWrap>
  );
}
