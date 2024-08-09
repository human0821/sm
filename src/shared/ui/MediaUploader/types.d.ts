import type { ReactNode } from "react";

declare global {
  interface MediaUploader {
    initialImage: string;
    text?: ReactNode;
    onChange: (file: File | null, resolve: (value: unknown) => void, reject: (value: unknown) => void) => void;
    accept?: string;
    disabled?: boolean;
    error?: string;
    setError?: (val: string) => void;
    maxSize?: { video?: number; image?: number };
  }
}
