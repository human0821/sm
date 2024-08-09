import { Box, Card, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import parser from "html-react-parser";

import { Colors } from "@/app/styles";
import { mediaQueryHelp } from "@/app/styles/functions";
import { motionFade } from "@/shared/consts/motion";
import { ButtonLoading } from "@/shared/ui/Button/Loading/ButtonLoading";
import { Loader } from "@/shared/ui/Button/Loading/ButtonLoading.styled";
import { SelectMui } from "@/shared/ui/Select/MuiSelect";

import { WidgetSettingsLabel, WrapFieldWidgetsShowSettings } from "./WidgetsShowSettings.styles";
import { useWidgetsShowSettings } from "../hooks/useWidgetsShowSettings";

/* Настройка виджетов на главной странице */
export const WidgetsShowSettings = () => {
  const { widgets, submit, isLoading, isDirty, setDirty, setWidgetsState } = useWidgetsShowSettings();

  return (
    <form onSubmit={submit} style={{ flexGrow: 1 }}>
      <Stack gap={"20px"}>
        <Card style={{ background: Colors.YELLOW_MAIN }}>
          <Typography variant="h3">Виджеты на главной странице</Typography>
        </Card>
        {widgets ? (
          widgets.map(({ id, name, roles }, i) => (
            <motion.div {...motionFade} key={name}>
              <Card sx={mediaQueryHelp({ padding: { xs: "16px", s: "24px", l: "30px" } })}>
                <WrapFieldWidgetsShowSettings>
                  <WidgetSettingsLabel sx={mediaQueryHelp({ fontSize: { xs: "0.875rem", s: "1.125rem" } })}>
                    {parser(name)}
                  </WidgetSettingsLabel>

                  <Box
                    sx={{
                      ...mediaQueryHelp({
                        width: { xs: "100%", s: "230px", m: "300px", l: "380px", xl: "225px", xxl: "386px" },
                      }),
                      flexShrink: 0,
                    }}>
                    <SelectMui
                      placeholder={"Выберите роли"}
                      sx={{ width: "100%" }}
                      multiple
                      name={name}
                      value={widgets
                        .find((x) => x.id === id)
                        ?.roles.filter((x) => x.chosen)
                        .map((x) => `${x.id}`)}
                      options={roles.map((x) => ({ value: `${x.id}`, name: x.name }))}
                      onChange={(e) => {
                        const rolesChecked = e.target.value;
                        if (Array.isArray(rolesChecked)) {
                          setDirty(true);
                          setWidgetsState(
                            (x = []) => (
                              x?.[i].roles.forEach((y) => (y.chosen = rolesChecked.includes(`${y.id}`))), [...x]
                            ),
                          );
                        }
                      }}
                    />
                  </Box>
                </WrapFieldWidgetsShowSettings>
              </Card>
            </motion.div>
          ))
        ) : (
          <Box mx={"auto"}>
            <Loader />
          </Box>
        )}
        <ButtonLoading variant="contained" type="submit" loading={isLoading} disabled={!isDirty}>
          Сохранить
        </ButtonLoading>
      </Stack>
    </form>
  );
};
