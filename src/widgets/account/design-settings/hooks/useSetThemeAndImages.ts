import type { FormEvent } from "react";

import { useEffect, useRef, useState } from "react";

import { useUploadDesignImagesMutation } from "@/app/api/partners/api";
import store, { useAppDispatch, useAppSelector } from "@/app/store";
import { designActions } from "@/app/store/site-design-settings/slice";
import { useRTKAlert } from "@/shared/hooks/useRTKAlert";

/** Создаю замыкание для хранения ссылок на изображения
 * так как при предпросмотре компонент уничтожается и всё его состояние тоже
 */
const images: Record<UploadImages["type"], Blob | null | false> = {
  header: null,
  side: null,
  logo: null,
};

let prevUserId = "";

export function useSetThemeAndImages() {
  const partnerId = useAppSelector((state) => state.user.user?.id),
    [uploadDesignImages, uploadDesignImagesQuery] = useUploadDesignImagesMutation(),
    resolveRef = useRef<UploadImages["resolve"]>(),
    [currentDeleteImage, setCurrentDeleteImage] = useState<UploadImages["type"] | "">(""),
    alert = useRTKAlert(),
    dispatch = useAppDispatch(),
    designStore = useAppSelector((state) => state.design);

  //* Очищаем состояние файлов изображений при смене пользователя *
  useEffect(() => {
    if (partnerId && prevUserId !== partnerId) {
      prevUserId = partnerId;
      images.header = null;
      images.side = null;
      images.logo = null;
    }
  }, [partnerId]);

  useEffect(() => {
    return () => {
      const { isPreview, currentImagesLink } = store.getState().design;
      !isPreview && dispatch(designActions.setPreviewImagesLink(currentImagesLink));
    };
  }, []);

  /** Отправляем стиль сайта на сервер */
  function submit(e: FormEvent) {
    if (!partnerId) return;
    e.preventDefault();
    uploadDesignImages({
      partnerId,
      data: {
        ...images,
        color_schema: designStore.selectedColor,
      },
    }).then((x) => {
      if ("data" in x) {
        images.header = null;
        images.side = null;
        images.logo = null;
        dispatch(designActions.setDirty(false));
        dispatch(designActions.setDesignScheme({ colorSchema: designStore.selectedColor }));
      }
      alert("Оформление сайта обновлено", (x) => `Не удалось обновить оформление (ошибка ${x.status})`)(x);
    });
  }

  /** Устанавливаем визуально картинку в компоненте */
  function changeImage(
    file: UploadImages["file"],
    resolve: UploadImages["resolve"],
    reject: UploadImages["reject"],
    type: UploadImages["type"],
  ) {
    if (file) {
      images[type] = file;
      const linkBlob = URL.createObjectURL(file);
      dispatch(designActions.setPreviewImagesLink({ [type]: linkBlob }));
      dispatch(designActions.setDirty(true));
      resolve(linkBlob);
    } else {
      setCurrentDeleteImage(type);
      resolveRef.current = resolve;
    }
  }

  /** Подтверждаем удаление файла, очищаем состояние*/
  function deleteImage() {
    resolveRef.current?.("");
    if (currentDeleteImage) {
      dispatch(designActions.setDesignScheme({ [currentDeleteImage]: "" }));
      dispatch(designActions.setPreviewImagesLink({ [currentDeleteImage]: "" }));
      dispatch(designActions.setDirty(true));
      images[currentDeleteImage] = false;
    }
    setCurrentDeleteImage("");
  }

  /** Действие при закрытии окна или отказа удалить изображение */
  function onCloseModal() {
    setCurrentDeleteImage("");
  }

  /** Устанавливаем цвет оформления */
  function setColorSchema(color: string) {
    dispatch(designActions.setColorScheme(color));
  }

  return {
    changeImage,
    submit,
    uploadDesignImagesQuery,
    deleteImage,
    currentDeleteImage,
    onCloseModal,
    setColorSchema,
  };
}
