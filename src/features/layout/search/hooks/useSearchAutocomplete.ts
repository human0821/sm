import type { ProductEntity } from "@/entities/product/types";

import { useEffect, useRef, useState } from "react";

import LocalStorage from "@/shared/consts/localStorage";
import useDebounce from "@/shared/hooks/useDebounce";

import { productsList } from "../consts/products";

export function useSearchAutocomplete({ minLength } = { minLength: 3 }) {
  const [search, setSearch] = useState(localStorage.getItem(LocalStorage.ADMIN_SEARCH) || "");
  const searchDebounce = useDebounce(search, 500);
  const requestTimeout = useRef<NodeJS.Timeout>();
  const [showAutocomplete, setShowAutocomplete] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const focusDebounce = useDebounce(isFocus, 100);
  const [isLoading, setIsLoading] = useState(false);
  const products = useRef<ProductEntity.SnippetAutocomplete[]>([]);

  const handleSubmit = () => {
    // TODO: Вызов эндпоинта autocomplete через debounce
    setIsLoading(true);
    requestTimeout.current = setTimeout(() => {
      setIsLoading(false);
      setShowAutocomplete(true);
      products.current = search === "empty" ? [] : productsList;
    }, 1000);
  };

  useEffect(() => {
    localStorage.setItem(LocalStorage.ADMIN_SEARCH, search);
    if (search.length < minLength || !focusDebounce) {
      setIsLoading(false);
      setShowAutocomplete(false);
    }

    return () => {
      setIsLoading(false);
      clearTimeout(requestTimeout.current);
    };
  }, [search, focusDebounce]);

  useEffect(() => {
    if (focusDebounce && searchDebounce.length >= minLength) {
      handleSubmit();
    } else {
      setIsLoading(false);
      setShowAutocomplete(false);
    }
  }, [searchDebounce, focusDebounce]);

  return {
    search,
    setSearch,
    showAutocomplete,
    setShowAutocomplete,
    isFocus,
    setIsFocus,
    isLoading,
    handleSubmit,
    products: products.current,
  };
}
