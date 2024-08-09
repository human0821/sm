import { useLayoutEffect, useState } from "react";

export function useGetScreen() {
  const [size, setSize] = useState([window.innerWidth, window.innerHeight]);

  useLayoutEffect(() => {
    const updateSize = () => {
      setSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", updateSize);

    return () => window.removeEventListener("resize", updateSize);
  });

  return {
    width: size[0],
    height: size[1],
  };
}
