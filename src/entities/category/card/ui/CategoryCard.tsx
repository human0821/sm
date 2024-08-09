import { useState } from "react";

import { declinationOfNumber } from "@/shared/utils/stringHelpers";

import { CardWrapper, CardHeader, CategoryName, CategoryDesc, ImgWrapper, Img } from "./CategoryCard.styled";

export const CategoryСard = ({ name, color, amount, image, area }: CategoryCardEntity) => {
  const [loaded, setLoaded] = useState(false);

  const loadHandlear = () => {
    setLoaded(true);
  };

  return (
    <CardWrapper color={color} area={area}>
      <CardHeader>
        <CategoryName variant="h4">{name}</CategoryName>
        <CategoryDesc>
          {amount || 0} {declinationOfNumber(amount || 0, ["товар", "товара", "товаров"])}
        </CategoryDesc>
      </CardHeader>
      <ImgWrapper>{image && <Img src={image} onLoad={loadHandlear} loaded={loaded} />}</ImgWrapper>
    </CardWrapper>
  );
};
