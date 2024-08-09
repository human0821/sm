import { Typography } from "@mui/material";

import { CategoryСard } from "@/entities/category/card";

import { SectionWrapper } from "./CategorySection.styled";

export const CategorySection = ({ reverse, color, name, subSections }: CategorySection) => {
  return (
    <div>
      <Typography variant="h3">{name}</Typography>
      <SectionWrapper reverse={reverse}>
        {subSections.map(({ id, ...other }, index) => (
          <CategoryСard key={id} id={id} area={`сat${index + 1}`} {...other} color={color || "#ff9738"} />
        ))}
      </SectionWrapper>
    </div>
  );
};
