import { Card, InputAdornment, Stack, TextField, Typography } from "@mui/material";

import { FIELDS } from "@/shared/consts/fields";
import { ButtonLoading } from "@/shared/ui/Button/Loading/ButtonLoading";
import { EmailField, PhoneField } from "@/shared/ui/Fields";
import { fieldRegister } from "@/shared/utils/fieldRegister";

import { useBasicInformation } from "../hooks/useBasicInformation";

export const BasicInformation = () => {
  const { form, isLoadingPartner, submit, links, isDirty } = useBasicInformation();

  return (
    <Card>
      <form onSubmit={form.handleSubmit(submit)}>
        <Stack gap={2}>
          <Typography variant="h3" mb={"40px"}>
            Основная информация
          </Typography>

          <Stack gap={6}>
            <TextField {...fieldRegister(form, FIELDS.nameShop)} />

            <PhoneField form={form} />

            <EmailField form={form} />

            <TextField {...fieldRegister(form, FIELDS.shopDescription)} />

            <Stack gap={"20px"}>
              {links.map((link, index) => (
                <TextField
                  {...fieldRegister(form, FIELDS.link(link.name))}
                  key={index}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment
                        sx={({ palette }) => ({ color: palette.primary.main })}
                        style={{ width: "30px", display: "flex", justifyContent: "center" }}
                        position="start">
                        {link.icon}
                      </InputAdornment>
                    ),
                  }}
                  variant="outlined"
                />
              ))}
            </Stack>
          </Stack>

          <ButtonLoading
            loading={isLoadingPartner}
            disabled={isLoadingPartner || !isDirty}
            type="submit"
            variant="contained"
            sx={{ mt: "20px" }}>
            Сохранить
          </ButtonLoading>
        </Stack>
      </form>
    </Card>
  );
};
