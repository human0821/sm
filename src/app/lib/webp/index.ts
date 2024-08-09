export const checkSupportWebp = () => {
  try {
    const canvas = document.createElement("canvas");
    const isCreated = canvas.toDataURL("image/webp", 0.5).indexOf("data:image/webp") === 0;
    canvas.remove();
    return isCreated;
  } catch (err) {
    return false;
  }
};

export const WEBP_SUPPORT_CLASS = "y-webp";
export const NO_WEBP_SUPPORT_CLASS = "n-webp";

export const setBodyWebpClass = () => {
  const isSupport = checkSupportWebp();
  if (isSupport) {
    document.body.classList.add(WEBP_SUPPORT_CLASS);
    document.body.classList.remove(NO_WEBP_SUPPORT_CLASS);
  } else {
    document.body.classList.remove(WEBP_SUPPORT_CLASS);
    document.body.classList.add(NO_WEBP_SUPPORT_CLASS);
  }
};
