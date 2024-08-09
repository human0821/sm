import { EmptyTitle, EmptyWrapper } from "./BlockEmptyEntity.styled";

export function BlockEmptyEntity({ title, children, size = "h3" }: Block.Empty) {
  return <EmptyWrapper>{title ? <EmptyTitle variant={size}>{title}</EmptyTitle> : children}</EmptyWrapper>;
}
