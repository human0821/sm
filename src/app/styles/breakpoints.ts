export const enum Breakpoints {
  DESKTOP_L = "1920px",
  DESKTOP = "1440px",
  TABLET_L = "992px",
  TABLET = "768px",
  MOBILE_L = "576px",
  MOBILE_S = "320px",
}

/** const enum Breakpoints - удалится после компиляции, для работы с точками нужна константа */
export const BREAKPOINTS_VALUES = [
  Breakpoints.DESKTOP_L,
  Breakpoints.DESKTOP,
  Breakpoints.TABLET_L,
  Breakpoints.TABLET,
  Breakpoints.MOBILE_L,
  Breakpoints.MOBILE_S,
];

export const BREAKPOINTS_SIZES = {
  xs: Breakpoints.MOBILE_S,
  s: Breakpoints.MOBILE_L,
  m: Breakpoints.TABLET,
  l: Breakpoints.TABLET_L,
  xl: Breakpoints.DESKTOP,
  xxl: Breakpoints.DESKTOP_L,
};
