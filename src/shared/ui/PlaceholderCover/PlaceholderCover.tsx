import { PlaceholderCoverWrap } from "./PlaceholderCover.style";
import { Loader } from "../Button/Loading/ButtonLoading.styled";

export function PlaceholderCover({
  children,
  isLoading,
  opacity = true,
}: {
  children: React.ReactNode;
  isLoading?: boolean;
  opacity?: boolean;
}) {
  return <PlaceholderCoverWrap opacity={opacity}> {isLoading ? <Loader /> : children}</PlaceholderCoverWrap>;
}
