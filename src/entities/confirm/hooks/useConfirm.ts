import { useEffect, useRef, useState } from "react";

import { scrollValues } from "@/shared/utils/scroll";

export const useConfirm = () => {
  const elementRef = useRef<HTMLDivElement | null>(null);
  const okHandlerRef = useRef<(() => void) | null>(null);
  const cancelHandlerRef = useRef<(() => void) | null>(null);
  const [state, setState] = useState<Confirm.DataState>({ x: 0, y: 0, show: false });

  const position = (element: HTMLDivElement) => {
    elementRef.current = element;
    const rect = element.getBoundingClientRect();
    const scroll = scrollValues();
    const [scrollX, scrollY] = scroll;
    const rectTop = rect.top;
    const rectLeft = rect.left;
    setState({ x: scrollX + rectLeft, y: scrollY + rectTop, show: true });
  };

  const handlers = (okHandler: () => void, cancelHandler: () => void) => {
    okHandlerRef.current = okHandler;
    cancelHandlerRef.current = cancelHandler;
  };

  const onResize = () => {
    if (elementRef.current) {
      position(elementRef.current);
    }
  };

  const onOK = () => {
    if (okHandlerRef.current) okHandlerRef.current();
    setState({ ...state, show: false });
  };

  const onCancel = () => {
    if (cancelHandlerRef.current) cancelHandlerRef.current();
    setState({ ...state, show: false });
  };

  const hide = () => setState({ ...state, show: false });

  useEffect(() => {
    if (state.show) {
      window.addEventListener("resize", onResize);
    }
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [state.show]);

  return {
    state,
    hide,
    onOK,
    onCancel,
    position,
    handlers,
  };
};
