import type { ChangeEvent } from "react";

import { useSnackbar } from "notistack";
import { useEffect, useRef, useState } from "react";

import { PlusIcon, TrashIcon, PlayIcon } from "@/assets/icons";
import { Variants } from "@/shared/consts/variants";
import { formatBytes } from "@/shared/utils/formatBytes";
import { getIsVideoByUrl } from "@/shared/utils/stringHelpers";

import {
  ImageUploaderAdd,
  ImageUploaderDelete,
  ImageUploaderHover,
  ImageUploaderInput,
  ImageUploaderText,
  ImageUploaderWrapper,
  VideoWrapper,
  VideoPreview,
  VideoPlay,
  ErrorMessage,
  ImageContainer,
} from "./MediaUploader.styled";
import { Loader } from "../Button/Loading/ButtonLoading.styled";
import { Picture } from "../Picture/Picture";

export function MediaUploader({
  initialImage,
  onChange,
  text = "Загрузить фото",
  accept = "image/png, image/jpeg, image/jpg, image/gif, image/bmp",
  disabled,
  error,
  setError,
  maxSize,
}: MediaUploader) {
  const [image, setImage] = useState(initialImage);
  const [file, setFile] = useState<File>();
  const [isLoading, setIsLoading] = useState(false);
  const input = useRef<HTMLInputElement>(null);
  const { enqueueSnackbar } = useSnackbar();
  const [isVideo, setIsVideo] = useState<boolean | string>();

  useEffect(() => {
    setIsVideo(getIsVideoByUrl(image) || getIsVideoByUrl(file?.name || ""));
  }, [image, file]);

  const handleUploadFile = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files?.length) {
      const [file] = event.target.files;
      const condition = getIsVideoByUrl(file.name) ? maxSize?.video : maxSize?.image;

      if ((condition && file.size <= condition) || !condition) {
        setIsLoading(true);
        setFile(file);
        return new Promise((resolve, reject) => {
          onChange(file, resolve, reject);
        })
          .then((newImage) => {
            if (typeof newImage === "string") {
              setImage(newImage);
              if (setError) {
                setError("");
              }
            }
          })
          .catch((error: string) => {
            enqueueSnackbar(error, {
              variant: Variants.ERROR,
            });
          })
          .finally(() => {
            if (input.current) {
              input.current.value = "";
            }
            setIsLoading(false);
          });
      } else {
        enqueueSnackbar(`Файл ${file.name} превышает допустимый размер в ${formatBytes(condition, 1)}`, {
          variant: Variants.ERROR,
        });
        if (input.current) {
          input.current.value = "";
        }
      }
    }
  };

  const handleDelete = (event: ClickEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();

    return new Promise((resolve, reject) => {
      onChange(null, resolve, reject);
    })
      .then(() => {
        setImage("");
        if (input.current) {
          input.current.value = "";
        }
        if (setError) {
          setError("Это обязательное поле");
        }
      })
      .catch((error: string) => {
        enqueueSnackbar(error, {
          variant: Variants.ERROR,
        });
      });
  };

  return (
    <ImageContainer>
      <ImageUploaderWrapper disabled={disabled} error={error ? error.length > 0 : false}>
        <ImageUploaderInput
          type="file"
          accept={accept}
          ref={input}
          disabled={isLoading || disabled}
          onInput={handleUploadFile}
        />

        {image && (
          <>
            {isVideo ? (
              <VideoWrapper>
                <VideoPreview src={image} />
                <VideoPlay>
                  <PlayIcon />
                </VideoPlay>
              </VideoWrapper>
            ) : (
              <Picture src={image} container={{ width: "100%", height: "100%" }} />
            )}
            <ImageUploaderDelete onClick={handleDelete}>
              <TrashIcon />
            </ImageUploaderDelete>
          </>
        )}
        <ImageUploaderHover stub={Number(image.length === 0)} loading={Number(isLoading)}>
          <ImageUploaderAdd disableRipple>{isLoading ? <Loader /> : <PlusIcon />}</ImageUploaderAdd>
          <ImageUploaderText>{text}</ImageUploaderText>
        </ImageUploaderHover>
      </ImageUploaderWrapper>
      {error && error.length > 0 && <ErrorMessage>{error}</ErrorMessage>}
    </ImageContainer>
  );
}
