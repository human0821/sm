interface ApiErrorResponse {
  status: number;
  data: { detail: string | { [key: string]: string } };
}
