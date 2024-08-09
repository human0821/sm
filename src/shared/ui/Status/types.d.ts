import type { StatusesList } from "./consts";

declare namespace Status {
  export interface Component {
    status: StatusesList;
    title?: string;
    className?: string;
  }
}
