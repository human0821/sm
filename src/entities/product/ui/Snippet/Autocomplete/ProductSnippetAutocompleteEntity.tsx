import type { ProductEntity } from "@/entities/product/types";

import { useNavigate } from "react-router-dom";

import Routes from "@/app/routes/consts/routes";
import { ChevronIcon } from "@/assets/icons";
import ProductStatuses from "@/entities/product/consts/statuses";
import { Picture } from "@/shared/ui/Picture/Picture";
import { convertToRouble } from "@/shared/utils/stringHelpers";

import {
  AutocompleteChevron,
  AutocompleteCost,
  AutocompleteInfo,
  AutocompleteLink,
  AutocompleteStatus,
  AutocompleteThumb,
  AutocompleteTitle,
  AutocompleteWrapper,
} from "./ProductSnippetAutocompleteEntity.styled";

export function ProductSnippetAutocompleteEntity({
  product,
  onClick,
}: {
  product: ProductEntity.SnippetAutocomplete;
  onClick?: () => void;
}) {
  const navigate = useNavigate();

  const path = Routes.PRODUCT_PAGE.replace(":id", String(product.id));

  const handleChevronClick = () => {
    navigate(path), onClick?.();
  };

  const cost = product.cost ? convertToRouble(product.cost) : undefined;

  return (
    <AutocompleteWrapper>
      <AutocompleteLink onClick={onClick} to={path} />
      <AutocompleteThumb>
        <Picture src={product.thumb} container={{ width: "100%", height: "100%" }} />
      </AutocompleteThumb>
      <AutocompleteInfo>
        <AutocompleteTitle variant="h3">{product.title}</AutocompleteTitle>
        <AutocompleteStatus active={product.count || 0} variant="h6">
          {product.count ? ProductStatuses.AVAILABLE : ProductStatuses.NOT_AVAILABLE}
          {product.count ? ` ${product.count} ед.` : ""}
        </AutocompleteStatus>
        {cost && <AutocompleteCost variant="h3">{cost}</AutocompleteCost>}
      </AutocompleteInfo>
      <AutocompleteChevron onClick={handleChevronClick}>
        <ChevronIcon />
      </AutocompleteChevron>
    </AutocompleteWrapper>
  );
}
