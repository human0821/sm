import type { DateFormat } from "../ui/DateFormat/types";

import dayjs from "dayjs";

import { DASH, DATE_FORMAT } from "../consts/dateFormat";

export function dateFormat(date: DateFormat["date"], { format, emptyText }: { format?: string; emptyText?: string } = {}) {
  if (!date || (typeof date === "string" && date.length < 4)) return emptyText || DASH;

  return dayjs(date).format(format || DATE_FORMAT);
}
