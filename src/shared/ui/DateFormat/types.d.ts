import type dayjs from "dayjs";

interface DateFormat {
  date: Parameters<typeof dayjs>[0];
  format?: string;
  emptyText?: string;
}
