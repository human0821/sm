import type { ReactNode } from "react";

import { Stack, Typography } from "@mui/material";

import { mediaQueryHelp } from "@/app/styles/functions";
import { FooterOkIcon, FooterTgIcon, FooterVkIcon } from "@/assets/icons";
import { DescriptionItemOpacityWithLabel } from "@/shared/ui/DescriptionItemOpacityWithLabel/DescriptionItemOpacityWithLabel";

import { LayoutMenuFooterEntitySocial, LayoutMenuFooterEntityWrapper } from "./LayoutMenuFooterEntity.styled";

/**
 * Отображает сущность меню нижнего колонтитула для макета.
 */
export function LayoutMenuFooterEntity(footer: LayoutMenuFooterEntity) {
  const socials: { [kei in keyof LayoutMenuFooterEntity]?: ReactNode } = {
    vkLink: <FooterVkIcon />,
    telegramLink: <FooterTgIcon />,
    okLink: <FooterOkIcon />,
  };

  return (
    <>
      {
        <LayoutMenuFooterEntityWrapper>
          <Typography variant="h6" sx={{ mb: "20px" }}>
            {footer.name}
          </Typography>
          <Stack gap={"12px"}>
            <Stack sx={mediaQueryHelp({ flexDirection: { xs: "column" }, gap: { xs: 1.5 } })}>
              {footer.phoneNumber && (
                <DescriptionItemOpacityWithLabel label="Телефон" description={footer.phoneNumber} linkType="tel" />
              )}
              {footer.email && (
                <DescriptionItemOpacityWithLabel label="Почта" description={footer.email} linkType="mailto" />
              )}
            </Stack>
            {footer.description && <DescriptionItemOpacityWithLabel description={footer.description} lineClamp={3} />}

            <Stack direction={"row"} gap={1.5}>
              {Object.entries(socials)
                .filter((x) => footer[x[0] as keyof LayoutMenuFooterEntity])
                .map(([link, elem]) => (
                  <LayoutMenuFooterEntitySocial key={link} rel="noopener noreferrer" href={link} target="_blank">
                    {elem}
                  </LayoutMenuFooterEntitySocial>
                ))}
            </Stack>
          </Stack>
        </LayoutMenuFooterEntityWrapper>
      }
    </>
  );
}
