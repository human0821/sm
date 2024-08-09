import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

import { CloseIcon, SearchIcon } from "@/assets/icons";
import { Loader } from "@/shared/ui/Button/Loading/ButtonLoading.styled";

import {
  AutocompleteCloseButton,
  AutocompleteDropdown,
  AutocompleteInput,
  AutocompleteInputPlaceholder,
  AutocompleteInputWrapper,
  AutocompleteWrapper,
} from "./LayoutSearchAutocomplete.styled";
import { useSearchAutocomplete } from "../../hooks/useSearchAutocomplete";
import { LayoutSearchDropdown } from "../Dropdown/LayoutSearchDropdown";

export function LayoutSearchAutocomplete({ onShowResult }: LayoutSearchAutocomplete) {
  const {
    search,
    setSearch,
    showAutocomplete,
    setShowAutocomplete,
    setIsFocus,
    isFocus,
    isLoading,
    handleSubmit,
    products,
  } = useSearchAutocomplete();

  const handleClose = (event: ClickEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    if (!isLoading) {
      setSearch("");
    }
  };

  useEffect(() => {
    if (onShowResult) {
      onShowResult(showAutocomplete);
    }
  }, [showAutocomplete]);

  return (
    <AutocompleteWrapper active={Number(showAutocomplete)}>
      <SearchIcon />
      <AutocompleteInputWrapper onPointerDown={() => setTimeout(() => setIsFocus(true))}>
        <AutocompleteInput
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onKeyDown={(event) => event.code === "Enter" && handleSubmit()}
        />
        {search.length === 0 && (
          <AutocompleteInputPlaceholder>
            {!isFocus && (
              <>
                <span>Поиск</span> по сайту
              </>
            )}
          </AutocompleteInputPlaceholder>
        )}
      </AutocompleteInputWrapper>
      <AnimatePresence>
        {(showAutocomplete || isLoading) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onPointerDown={() => setTimeout(() => setIsFocus(true))}>
            <AutocompleteCloseButton disabled={isLoading} onClick={handleClose}>
              {isLoading ? <Loader /> : <CloseIcon />}
            </AutocompleteCloseButton>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence mode={"wait"}>
        {showAutocomplete && (
          <AutocompleteDropdown initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <LayoutSearchDropdown products={products} onClose={() => setShowAutocomplete(false)} />
          </AutocompleteDropdown>
        )}
      </AnimatePresence>
    </AutocompleteWrapper>
  );
}
