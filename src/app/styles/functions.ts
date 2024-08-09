import type { Breakpoints } from "@/app/styles";
import type { SxProps } from "@mui/material";
import type { CSSProperties } from "react";

import { BREAKPOINTS_SIZES, BREAKPOINTS_VALUES } from "./breakpoints";

export const rgba = (hex: string, alpha: number) => {
  const [r, g, b] = hex.match(/\w\w/g)!.map((x) => parseInt(x, 16));
  return `rgba(${r},${g},${b},${alpha})`;
};

/* eslint-disable */
export const adjustColor = (hex: string, amount: number) => {
  const color = parseInt(hex.startsWith("#") ? hex.slice(1) : hex, 16);
  const r = Math.min(255, Math.max(0, (color >> 16) + amount));
  const g = Math.min(255, Math.max(0, ((color & 0x00ff00) >> 8) + amount));
  const b = Math.min(255, Math.max(0, (color & 0x0000ff) + amount));

  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, "0")}`;
};
/* eslint-enable */

/** Функция принимает конечные точки в виде объекта или массива.
 * @example  mediaQueryHelp({
      [Breakpoints.DESKTOP_L]: { fontSize: "2rem" },
      [Breakpoints.TABLET]: { fontSize: "1.5rem" },
      [Breakpoints.MOBILE_L]: { fontSize: "1.25rem" },
      [Breakpoints.MOBILE_S]: { fontSize: "1.125rem" },
    })

    mediaQueryHelp({
      fontSize: ["2rem", "1.5rem", "1.25rem", "1.125rem"],
    })

    mediaQueryHelp({
      fontSize: { xs: "0.875rem", s: "1.125rem", m: "1.25rem", l: "1.5rem", xxl: "2rem" },
    })

    (оставил обратную совместимость на время)
 */
export function mediaQueryHelp<T extends CSSProperties | SxProps>(
  media:
    | { [key in Breakpoints]?: T }
    | { [key in keyof T]: (string | number)[] | { [key in keyof typeof BREAKPOINTS_SIZES]?: string | number } },
  options: { minmaxMode: "min" | "max" } = { minmaxMode: "min" },
): Record<string, T> {
  return Object.entries(media).reduce(
    (acc, [key, value]) => {
      const BREAKPOINTS = options.minmaxMode === "max" ? BREAKPOINTS_VALUES : [...BREAKPOINTS_VALUES].reverse();

      if (typeof value === "object" && !Array.isArray(value)) {
        Object.entries(value).forEach(([k, v]) => {
          const point = `@media (${options.minmaxMode}-width: ${BREAKPOINTS_SIZES[k as keyof typeof BREAKPOINTS_SIZES]})`;
          if (!acc[point]) acc[point] = {} as T;
          Object.assign(acc[point] as object, { [key]: v });
        });

        return acc;
      }

      if (Array.isArray(value)) {
        value.forEach((item, i) => {
          const point = `@media (${options.minmaxMode}-width: ${BREAKPOINTS[i]})`;
          if (item) {
            if (!acc[point]) acc[point] = {} as T;
            Object.assign(acc[point] as object, { [key]: item });
          }
        });
      } else acc[`@media (${options.minmaxMode}-width: ${key})`] = value;

      return acc;
    },
    {} as Record<string, T>,
  );
}

export default { rgba, mediaQueryHelp, adjustColor };
