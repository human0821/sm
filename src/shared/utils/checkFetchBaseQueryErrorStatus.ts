import type { SerializedError } from "@reduxjs/toolkit";
import type { FetchBaseQueryError } from "@reduxjs/toolkit/query";

export function checkFetchBaseQueryErrorStatus(
  error: FetchBaseQueryError | SerializedError | undefined,
  status: number,
  more = false,
) {
  return (
    typeof error === "object" &&
    "status" in error &&
    (more ? Number(error.status) >= status : Number(error.status) === status)
  );
}
