import type { RecursiveAccordionDetail as RecursiveAccordionDetailType } from "../types";
import type { AccordionChild as AccordionChildType } from "@/entities/product/types";

import { AccordionDetails, Typography } from "@mui/material";
import { type ReactNode } from "react";

import { AccordionChild } from "../../AccordionChild";
import { FieldMiniPercent } from "../../FieldMiniPercent";
import { Flex } from "../../Flex";

export function RecursiveAccordionDetail({ array, onChange }: RecursiveAccordionDetailType) {
  /** Рекурсивная генерация аккордеона с бесконечной глубиной */
  const getAccordionChild = (child: AccordionChildType[] | AccordionChildType): ReactNode => {
    if (Array.isArray(child)) {
      return child.map((y) => {
        if (Array.isArray(y.children)) {
          return (
            <AccordionChild key={y.id} label={y.label}>
              {y.children?.map((x) => getAccordionChild(x))}
            </AccordionChild>
          );
        } else {
          return (
            <Flex justifyContent={"space-between"} key={y.id}>
              <Typography>{y.label}</Typography>
              <FieldMiniPercent props={{ value: y.percent, id: `${y.id}` }} onChange={onChange} />
            </Flex>
          );
        }
      });
    } else {
      if (child.children) {
        return (
          <AccordionChild label={child.label} key={child.id}>
            {child.children?.map((x) => getAccordionChild(x))}
          </AccordionChild>
        );
      }
      return (
        <Flex justifyContent={"space-between"} key={child.id}>
          <Typography>{child.label}</Typography>
          <FieldMiniPercent props={{ value: child.percent, id: `${child.id}` }} onChange={onChange} />
        </Flex>
      );
    }
  };

  return <AccordionDetails>{getAccordionChild(array)}</AccordionDetails>;
}
