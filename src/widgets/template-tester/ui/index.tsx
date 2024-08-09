import { Stack, Typography, type TypographyVariant, Grid, Input, TextField, Button, type Theme } from "@mui/material";

import InputPassword from "@/shared/ui/Input/Password/InputPassword";

const TemplateTester = () => {
  const typographies = ["h1", "h2", "h3", "h4", "h5", "h6", "body", "body2"];
  const themeTypes = (type: string, func: JSX.Element[]) => (
    <Stack
      sx={{
        p: 4,
        borderRadius: 5,
        background: (theme: Theme) => theme.palette.background.paper,
      }}
      gap={2}>
      <Typography variant="h3">{type}</Typography>
      {func}
    </Stack>
  );

  const typoCards = typographies.map((typo) => (
    <Stack key={typo} gap={1}>
      <Typography variant={typo as TypographyVariant}>{typo}</Typography>
    </Stack>
  ));

  return (
    <>
      <Stack gap={5}>
        <Stack gap={2}>
          <Grid container spacing={2}>
            <Grid item xs={3} columnSpacing={1}>
              <Stack>
                Button contained primary
                <Button variant="contained">Кнопка</Button>
              </Stack>
            </Grid>
            <Grid item xs={3} columnSpacing={1}>
              <Stack>
                Button outlined primary
                <Button variant="outlined">Кнопка</Button>
              </Stack>
            </Grid>
            <Grid item xs={3} columnSpacing={1}>
              <Stack>
                Button text
                <Button variant="text">Кнопка</Button>
              </Stack>
            </Grid>
            <Grid item xs={3} columnSpacing={1}>
              <Stack>
                Button disabled
                <Button disabled variant="text">
                  Кнопка
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Stack>
        <Stack gap={2}>
          <Grid container spacing={2}>
            <Grid item xs={4} columnSpacing={1}>
              <Stack gap={3}>
                Input
                <Input placeholder="Обычный инпут" />
              </Stack>
            </Grid>
            <Grid item xs={4} columnSpacing={1}>
              <Stack gap={3}>
                InputPassword
                <InputPassword label="Пароль" />
              </Stack>
            </Grid>
            <Grid item xs={4} columnSpacing={1}>
              <Stack gap={3}>
                TextField disabled
                <TextField label="Пароль" disabled />
              </Stack>
            </Grid>
          </Grid>
        </Stack>

        <Stack gap={5}>{themeTypes("#Typography", typoCards)}</Stack>
      </Stack>
    </>
  );
};

export { TemplateTester };
