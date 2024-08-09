import type { ProductEntity } from "@/entities/product/types";

import { ProductSnippetAutocompleteEntity } from "@/entities/product";
import { SEARCH_NO_RESULTS } from "@/shared/consts/content";

import { DropdownEmpty, DropdownList, DropdownWrapper } from "./LayoutSearchDropdown.styled";

export function LayoutSearchDropdown({
  products = [],
}: {
  products: ProductEntity.SnippetAutocomplete[];
  onClose: () => void;
}) {
  return (
    <DropdownWrapper>
      {products.length === 0 && <DropdownEmpty>{SEARCH_NO_RESULTS}.</DropdownEmpty>}
      {products.length > 0 && (
        <DropdownList>
          {products.map((product) => (
            <ProductSnippetAutocompleteEntity key={product.id} product={product} />
          ))}
        </DropdownList>
      )}
    </DropdownWrapper>
  );
}
