import { styled } from "@mui/material";

export const Avatar = styled("img")<Pick<AvatarComponent, "size" | "variant" | "rounded"> & { isStub: boolean }>`
  background-color: transparent;
  object-fit: cover;
  object-position: center;
  flex-shrink: 0;
  ${({ size, rounded }) => `
    min-width: ${size}px;
    min-height: ${size}px;
    border-radius: ${rounded}px;
  `}
  ${(props) =>
    props.variant === "admin-header" &&
    !props.isStub &&
    `
      border: 1px solid ${props.theme.palette.primary.main};
    `}
`;
