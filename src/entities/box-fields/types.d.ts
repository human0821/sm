import type { ReactNode } from "react";

declare global {
  interface BoxFields {
    title: string;
    icon: ReactNode;
    children: ReactNode;
    background?: string;
  }
}
