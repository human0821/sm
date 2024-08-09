import type { ProductAccordionPercentEntity } from "../../types";

import { Accordion, AccordionDetails, AccordionSummary, Stack, Typography } from "@mui/material";
import { useState } from "react";

import { partnersAdminApi } from "@/app/api/apiGenerator/admin";
import { useAppSelector } from "@/app/store";
import { mediaQueryHelp } from "@/app/styles/functions";
import { AccordionArrow } from "@/shared/ui/AccordionArrow";
import { FieldMiniPercent } from "@/shared/ui/FieldMiniPercent";
import { Flex } from "@/shared/ui/Flex";

import { ProductAccordionPercentEntityWrap } from "./ProductAccordionPercentEntity.styled";

export function ProductAccordionPercentEntity({
  isExpanded = false,
  items,
  onChange,
  changedIds,
  disabled,
}: ProductAccordionPercentEntity) {
  const [expanded, setExpanded] = useState(isExpanded);
  const isDirty = useAppSelector((s) => s.finResult.isDirty);
  partnersAdminApi.useGetMarkupAdminQuery();

  return items.subSections?.length ? (
    <ProductAccordionPercentEntityWrap>
      <Accordion expanded={expanded} disabled={disabled}>
        <AccordionSummary sx={{ ...mediaQueryHelp({ height: ["64px", "72px", "92px"] }), cursor: "default !important" }}>
          <Flex width={"100%"} justifyContent={"space-between"}>
            <Flex sx={{ cursor: "pointer" }} onClick={() => setExpanded(!expanded)}>
              <Typography variant="h3">{items.name}</Typography>
              <AccordionArrow isExpanded={expanded} />
            </Flex>

            <FieldMiniPercent
              props={{
                value: items.markup,
                id: `${items.id}`,
                error:
                  (items.markup === null || items.markup === undefined || String(items.markup)?.length === 0) && isDirty,
              }}
              onChange={onChange}
            />
          </Flex>
        </AccordionSummary>
        <AccordionDetails>
          <Stack sx={mediaQueryHelp({ gap: { xs: "10px", s: "20px" } })}>
            {items.subSections?.map((child) => (
              <Flex justifyContent={"space-between"} key={child.id}>
                <Typography>{child.name}</Typography>
                <FieldMiniPercent
                  props={{
                    value: child.markup,
                    id: `${child.id}`,
                    name: child.id,
                    error:
                      (child.markup === null || child.markup === undefined || String(child.markup)?.length === 0) &&
                      isDirty,
                  }}
                  onChange={onChange}
                  isGlows={changedIds?.includes(child.id)}
                />
              </Flex>
            ))}
          </Stack>
        </AccordionDetails>
      </Accordion>
    </ProductAccordionPercentEntityWrap>
  ) : null;
}
