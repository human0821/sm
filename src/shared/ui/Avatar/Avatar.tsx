import { useEffect, useState } from "react";

import { Avatar as CustomAvatar } from "./Avatar.styled";

export function Avatar({
  src,
  stub = "/images/profile/avatar.svg",
  alt = "",
  variant,
  size = 32,
  rounded = 4,
  className,
}: AvatarComponent) {
  const [source, setSource] = useState(src || stub);

  useEffect(() => {
    setSource(src || stub);
  }, [src]);

  return (
    <CustomAvatar
      className={className}
      src={source}
      onError={() => setSource(stub)}
      variant={variant}
      size={size}
      alt={alt}
      width={size}
      height={size}
      rounded={rounded}
      isStub={source === stub}
    />
  );
}
