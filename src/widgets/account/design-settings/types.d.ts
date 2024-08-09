interface UploadImages {
  file: File | null;
  resolve: (value: string | Blob | null) => void;
  reject: (value: unknown) => void;
  type: "logo" | "side" | "header";
}
