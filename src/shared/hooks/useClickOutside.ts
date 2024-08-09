import type React from "react";

import { useEffect } from "react";

export function useClickOutside({
  wrapper,
  onClose,
  isShow,
}: {
  wrapper: React.RefObject<HTMLElement>;
  onClose: () => void;
  isShow?: boolean;
}) {
  const handleClick = (event: Event) => {
    if (!wrapper.current?.parentElement?.contains(event.target as any)) {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, [isShow]);
}
