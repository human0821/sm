import { CardWrapper } from "./BlockCardEntity.styled";

export function BlockCardEntity({ children, className }: Block.Card) {
  return <CardWrapper className={className}>{children}</CardWrapper>;
}
