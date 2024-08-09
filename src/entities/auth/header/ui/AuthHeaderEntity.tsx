import type { StackProps } from "@mui/material";

import { Typography } from "@mui/material";

import { ButtonBack } from "@/shared/ui/Button/Back/ButtonBack";

import { AuthHeader } from "./AuthHeaderEntity.styled";

export function AuthHeaderEntity({ title, props }: { title: string; props?: StackProps }) {
  return (
    <AuthHeader {...props}>
      <ButtonBack />
      <Typography variant="h3" align="center">
        {title}
      </Typography>
    </AuthHeader>
  );
}
