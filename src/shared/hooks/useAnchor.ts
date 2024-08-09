import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function useAnchor() {
  const location = useLocation();

  useEffect(() => {
    if (window.location.hash) {
      const timer = setTimeout(() => {
        const anchorBlock = document.querySelector(`[data-anchor="${location.hash}"]`);
        if (anchorBlock) {
          // TODO: У меня не работает плавный скролл. Перепробовал все варианты
          // https://github.com/facebook/react/issues/23396
          window.requestAnimationFrame(() => anchorBlock.scrollIntoView({ behavior: "smooth" }));
          window.history.replaceState(null, "", `${location.pathname}${location.search}`);
          // anchorBlock.scrollIntoView({ block: 'start', behavior: "smooth" });
        }
      }, 1000);
      return () => clearTimeout(timer);
    }
  });
}
