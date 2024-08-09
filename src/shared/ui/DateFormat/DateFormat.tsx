import type { DateFormat } from "./types";

import dayjs from "dayjs";

import { DASH, DATE_FORMAT } from "@/shared/consts/dateFormat";

export function DateFormat({ date, format = DATE_FORMAT, emptyText = DASH }: DateFormat) {
  if (!date || (typeof date === "string" && date.length < 4)) return emptyText;

  return dayjs(date).format(format);
}
