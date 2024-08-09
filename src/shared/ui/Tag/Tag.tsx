import { ImportantIcon } from "@/assets/icons";

import { TagWrapper } from "./Tag.styled";

export function Tag({ size, isImportant, name, icon }: Tag) {
  return (
    <TagWrapper isImportant={isImportant} size={size}>
      {isImportant && (icon ? icon : <ImportantIcon />)}
      <span>{name}</span>
    </TagWrapper>
  );
}
