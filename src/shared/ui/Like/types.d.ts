interface Like {
  type: "LIKE" | "DISLIKE";
  count: number;
  onClick: null | (() => void);
  isActive: boolean;
}
