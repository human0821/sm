export const formatBytes = (bytes: number, decimals = 2) => {
  if (bytes === 0) {
    return "0 Байт";
  } else {
    const sizes = ["Байт", "КБ", "МБ", "ГБ", "ТБ"];
    const index = Math.floor(Math.log(bytes) / Math.log(1024));

    return `${(bytes / Math.pow(1024, index)).toFixed(decimals)} ${sizes[index]}`;
  }
};
