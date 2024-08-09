import { DescriptionItemWrap } from "./DescriptionItemOpacityWithLabel.styles";
import { TextEllipsis } from "../TextEllipsis/TextEllipsis";

/**
 * Компонент отображает один элемент описания с лейбелом или без, может принимать параметр среза лишних символов.
 */
export function DescriptionItemOpacityWithLabel({
  label = "",
  description = "",
  linkType,
  sliceDigits = 100,
  lineClamp = 1,
}: DescriptionItemOpacityWithLabel): JSX.Element {
  return (
    <DescriptionItemWrap>
      {label ? `${label}: ` : ""}
      {description &&
        (linkType ? (
          <a
            href={`${linkType}:${description}`}
            style={{ color: "inherit", textDecoration: "none" }}
            target="_blank"
            rel="noopener noreferrer">
            <TextEllipsis $lineClamp={lineClamp}>{description}</TextEllipsis>
          </a>
        ) : description.length > sliceDigits ? (
          `${description?.slice(0, sliceDigits)}...`
        ) : (
          <TextEllipsis $lineClamp={lineClamp}>{description || "-"}</TextEllipsis>
        ))}
    </DescriptionItemWrap>
  );
}
