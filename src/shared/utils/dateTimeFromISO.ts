// dateTimeFromISO(2024-03-12T19:54:41.123769Z) => 12.03.2024 19:54
export const dateTimeFromISO = (iso: string) => {
  const d = new Date(iso);
  const year = String(d.getFullYear());
  let date = String(d.getDate());
  let month = String(d.getMonth() + 1);
  let hours = String(d.getHours());
  let minutes = String(d.getMinutes());
  if (date.length === 1) date = `0${date}`;
  if (month.length === 1) month = `0${month}`;
  if (hours.length === 1) hours = `0${hours}`;
  if (minutes.length === 1) minutes = `0${minutes}`;
  return `${date}.${month}.${year} ${hours}:${minutes}`;
};
