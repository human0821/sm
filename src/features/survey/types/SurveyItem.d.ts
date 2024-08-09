declare namespace Survey {
  interface Item {
    id?: number;
    answer: string;
    percent?: number;
    freeAnswer?: boolean | null;
    isAnswer?: boolean;
    canSelect?: boolean;
    isShow?: boolean;
    isAnonymous?: boolean;
  }
  interface Action {
    answer: Item;
    resolve?: (value: unknown) => void;
    reject?: (value: unknown) => void;
  }
}
