import { Typography, Stack, Container } from "@mui/material";

import { TemplateTester } from "@/widgets/template-tester";

const StyleGuide = () => {
  return (
    <Container sx={{ py: 2, position: "relative" }}>
      <Stack gap={1} my={2}>
        <Typography textAlign="center" variant="h2">
          Vite-MUI-TS Template
        </Typography>
        <Typography textAlign="center" variant="subtitle1">
          React + TS + Vite + Redux + RTK + MUI + RRD + Prettier
        </Typography>
      </Stack>
      <TemplateTester />
    </Container>
  );
};

export { StyleGuide };
