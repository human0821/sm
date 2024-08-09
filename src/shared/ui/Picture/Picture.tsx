import { useMemo, useState } from "react";

import { NoImageIcon } from "@/assets/icons";

import { FallbackImageWrapper, Pic, Placeholder, Wrapper } from "./Picture.styled";

enum ImageStatus {
  Loading,
  Loaded,
  Error,
}

export const Picture: React.FC<Picture> = ({ src, alt, extension, width, height, container }) => {
  const [status, setStatus] = useState<ImageStatus>(ImageStatus.Loading);
  const onLoad = () => setStatus(ImageStatus.Loaded);
  const onError = () => setStatus(ImageStatus.Error);
  const size = { width, height };
  const isError = status === ImageStatus.Error;
  const isLoaded = status === ImageStatus.Loaded;
  const isLoading = status === ImageStatus.Loading;

  const img = useMemo(() => {
    const ext = (extension && `.${extension.replace(".", "")}`) || "";
    return src ? (
      <img loading="lazy" src={`${src}${ext}`} alt={alt || src} onLoad={onLoad} onError={onError} />
    ) : (
      <NoImageIcon />
    );
  }, [src, extension, alt]);

  return (
    <Wrapper {...size} container={container}>
      {isLoading && <Placeholder {...size} />}
      <Pic visible={isLoaded}>{img}</Pic>
      <FallbackImageWrapper visible={isError || !src}>
        <NoImageIcon />
      </FallbackImageWrapper>
    </Wrapper>
  );
};
