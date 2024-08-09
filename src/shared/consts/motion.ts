export const motionFadeScale = {
  initial: {
    opacity: 0,
    scale: 1.1,
  },
  animate: {
    opacity: 1,
    scale: 1,
  },
  exit: {
    opacity: 0,
    scale: 0.9,
  },
};

export const motionFade = {
  initial: { opacity: 0, display: "block" },
  exit: {
    opacity: 0,
    transitionEnd: {
      display: "none",
    },
  },
  animate: { opacity: 1 },
};

export const motionFadeFlex = {
  initial: { opacity: 0, display: "flex" },
  exit: {
    opacity: 0,
    transitionEnd: {
      display: "none",
    },
  },
  animate: { opacity: 1 },
};

export const motionFadeCollapse = {
  style: { overflow: "hidden" },
  initial: { opacity: 0, height: 0 },
  exit: { opacity: 0, height: 0 },
  animate: { opacity: 1, height: "auto" },
};

export const motionFadeScaleCollapse = (width: string | number) => ({
  style: { overflow: "hidden", display: "flex", flexShrink: 0 },
  initial: { opacity: 0, height: 0, width: 0 },
  exit: { opacity: 0, height: 0, width: 0 },
  animate: { opacity: 1, height: "auto", width: width ? width : "auto" },
});
