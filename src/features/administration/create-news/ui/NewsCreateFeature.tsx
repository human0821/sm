import type { ApiV1NewsPost } from "@/app/api/apiGenerator/admin/newsAdminApi";
import type { UseFormReturn } from "react-hook-form";

import { Box, FormHelperText, Stack } from "@mui/material";
import dayjs from "dayjs";

import { userApi } from "@/app/api/apiGenerator/common";
import { FIELDS } from "@/shared/consts/fields";
import { DatePicker } from "@/shared/ui/DatePicker/DatePicker";
import { SelectMui } from "@/shared/ui/Select/MuiSelect";
import { fieldRegister } from "@/shared/utils/fieldRegister";

export function NewsCreateFeature({ form }: { form: UseFormReturn<ApiV1NewsPost> }) {
  const roles = userApi.useGetRolesQuery().data;

  return (
    <Stack gap={"38px"}>
      <SelectMui {...fieldRegister(form, FIELDS.newsType)} defaultValue={form.formState.defaultValues?.newsType} />
      <SelectMui
        {...fieldRegister(form, FIELDS.roles)}
        multiple
        options={roles?.map((x) => ({ value: `${x.id}`, name: x.name }))}
        defaultValue={form.formState.defaultValues?.roles as unknown as string[]}
      />

      {(["datePublish", "dateFinish"] as const).map((v) => (
        <Box key={v} sx={{ position: "relative" }}>
          <DatePicker
            sx={{ width: "100%" }}
            {...fieldRegister(form, FIELDS[v])}
            onChange={(date) => form.setValue(v, date.format("YYYY-MM-DD"))}
            defaultValue={form.formState.defaultValues?.[v] ? dayjs(form.formState.defaultValues?.[v]) : undefined}
          />
          <FormHelperText error>{form.formState.errors[v]?.message}</FormHelperText>
        </Box>
      ))}
    </Stack>
  );
}
