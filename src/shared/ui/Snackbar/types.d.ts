interface Snackbar {
  state: State;
  message: string;
  id: number | string;
  variant: "success" | "error";
}
