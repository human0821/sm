import type { EmployeeSmPartnerSchema } from "@/app/api/apiGenerator/common/employeesApi";

import { Switch, TextField, Skeleton } from "@mui/material";
import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";

import { SelectCase } from "@/features/cases";
import { FIELDS } from "@/shared/consts/fields";
import { motionFade } from "@/shared/consts/motion";
import { useFetchRoles } from "@/shared/hooks/useFetchRoles";
import { ButtonLoading } from "@/shared/ui/Button/Loading/ButtonLoading";
import { EmailField, PhoneField } from "@/shared/ui/Fields";
import { InputPassword } from "@/shared/ui/Input";
import { MediaUploader } from "@/shared/ui/MediaUploader";
import { PasswordTooltip } from "@/shared/ui/PasswordTooltip";
import { SelectMui } from "@/shared/ui/Select/MuiSelect";
import { fieldRegister } from "@/shared/utils/fieldRegister";
import { RoleContext } from "@/shared/utils/rolesHelpers";

import { InfoAvatarUploader, InfoForm, SwitchWrapper, FieldsWrapper, SwitchsWrapper } from "./EmployeeProfileInfo.styled";
import { useEmployeeProfileInfo } from "../hooks/useEmployeeProfileInfo";

export const EmployeeProfileInfo = ({ data, isDisabled }: { data?: EmployeeSmPartnerSchema; isDisabled?: boolean }) => {
  const { roles } = useFetchRoles();
  const foundRoles = useContext(RoleContext);

  const { form, isLoading, submit, changeImage, currentImage, setCurrentImage, isDisablePriceSwitch, selectedRoles } =
    useEmployeeProfileInfo({
      id: data?.id,
    });

  const [isInit, setIsInit] = useState(false);
  /* без этого работает не корректно, не удалять */
  const priceFlag = form.watch("priceFlag");
  const values = form.getValues();

  useEffect(() => {
    if (isDisablePriceSwitch) {
      form.setValue("priceFlag", true, { shouldTouch: true });
    }
  }, [isDisablePriceSwitch]);

  useEffect(() => {
    form.register("priceFlag", {});
    return () => form.unregister("priceFlag", {});
  }, [form.register, form.unregister]);

  useEffect(() => {
    if (data) {
      const selected = data.roles.map((item) => `${item.id}`);
      setCurrentImage({ link: data.avatar || "", file: null });
      console.log(selected);
      //@ts-ignore
      form.setValue("roles", selected, { shouldTouch: true });
      form.setValue("fullName", data.fullName || "");
      form.setValue("phoneNumber", data.phoneNumber || "");
      form.setValue("email", data.email || "");
      if (!foundRoles?.isEmployer) {
        form.setValue("priceFlag", data.employee?.priceFlag);
        form.setValue("bonusFlag", data.employee?.bonusFlag);
      }
    }
    setTimeout(() => {
      setIsInit(true);
    }, 10);
  }, [data]);

  const onChangePrice = (e: any) => {
    form.setValue(e.target.name, !(values.priceFlag === true && e.target.value === "on"));
  };

  return (
    <InfoForm onSubmit={form.handleSubmit(submit)}>
      {isInit ? (
        <motion.div {...motionFade} key="content">
          <InfoAvatarUploader>
            <MediaUploader initialImage={currentImage.link} onChange={changeImage} disabled={isDisabled} />
          </InfoAvatarUploader>
        </motion.div>
      ) : (
        <motion.div {...motionFade} key="loader">
          <Skeleton height={250} width="100%" />
        </motion.div>
      )}
      <FieldsWrapper>
        <TextField {...fieldRegister(form, FIELDS.fullName, { required: " " })} disabled={isDisabled} />
        {isInit ? (
          <motion.div {...motionFade} key="content">
            <SelectMui
              {...form.register("roles", {
                required: true,
              })}
              options={roles}
              placeholder="Выберите из списка"
              multiple
              label="Роль"
              sx={{ width: "100%", height: 64 }}
              name="roles"
              defaultValue={selectedRoles}
              error={!!form.formState.errors["roles"]}
              helperText={form.formState.errors["roles"]?.message}
              disabled={isDisabled}
              onChange={(x) => {
                if (Array.isArray(x.target.value)) {
                  // @ts-ignore
                  form.setValue("roles", [...x.target.value]);
                }
              }}
            />
          </motion.div>
        ) : (
          <motion.div {...motionFade} key="loader">
            <Skeleton height={87} width="100%" />
          </motion.div>
        )}
        {foundRoles?.isEmployer && <SelectCase form={form} disabled={isDisabled} />}
        <PhoneField
          form={form}
          field={{ ...FIELDS.phone, validation: { ...FIELDS.phone, disabled: isDisabled, required: " " } }}
        />
        <EmailField
          form={form}
          field={{ ...FIELDS.email, validation: { ...FIELDS.email, disabled: data !== undefined, required: " " } }}
        />
        {!data && (
          <InputPassword
            autoComplete="new-password"
            label={
              <>
                Пароль <PasswordTooltip />
              </>
            }
            placeholder={FIELDS.password.placeholder}
            {...form.register("password", { ...FIELDS.password.validation, required: true })}
            error={!!form.formState.errors["password"]}
            helperText={form.formState.errors["password"]?.message}
            disabled={isDisabled}
          />
        )}
      </FieldsWrapper>
      {!foundRoles?.isEmployer && isInit && (
        <SwitchsWrapper>
          <SwitchWrapper
            control={
              <Switch
                sx={{ m: 1 }}
                name="priceFlag"
                checked={values.priceFlag}
                onChange={onChangePrice}
                defaultChecked={data ? data?.employee?.priceFlag : false}
              />
            }
            disabled={isDisablePriceSwitch || isDisabled}
            label="Доступ к меню Прайсы"
            labelPlacement="start"
          />
          <SwitchWrapper
            control={
              <Switch
                sx={{ m: 1 }}
                defaultChecked={data ? data?.employee?.bonusFlag : false}
                {...form.register("bonusFlag", {})}
              />
            }
            disabled={isDisabled}
            label="Доступ к расчету бонусами"
            labelPlacement="start"
          />
        </SwitchsWrapper>
      )}

      <ButtonLoading loading={isLoading} type="submit" variant="contained" disabled={isDisabled}>
        Сохранить
      </ButtonLoading>
    </InfoForm>
  );
};
