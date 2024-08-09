import type { ApiV1BannersPost } from "@/app/api/apiGenerator/admin/bannersAdminApi";
import type { FetchBaseQueryError } from "@reduxjs/toolkit/query";

import { useSnackbar } from "notistack";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { bannersAdminApi } from "@/app/api/apiGenerator/admin";
import Routes from "@/app/routes/consts/routes";
import { Variants } from "@/shared/consts/variants";
import { createFormData } from "@/shared/utils/createFormData";

export function useBannerForm({ id }: { id?: number }) {
  const form = useForm<ApiV1BannersPost>(),
    [postBannerAdmin, postBannerAdminState] = bannersAdminApi.usePostBannerAdminMutation(),
    [putBannerAdmin, putBannerAdminState] = bannersAdminApi.usePutBannerAdminMutation();
  const [currentImage, setCurrentImage] = useState<{ link: string; file: Blob | null }>({ link: "", file: null });
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const [showSuccess, setShowSuccess] = useState(false);
  const [imageError, setImageError] = useState<string>("");

  useEffect(() => {
    if (postBannerAdminState.error || putBannerAdminState.error) {
      const error =
        (postBannerAdminState.error as FetchBaseQueryError) || (putBannerAdminState.error as FetchBaseQueryError);
      enqueueSnackbar(
        // @ts-ignore
        typeof error.data?.detail === "string" // @ts-ignore
          ? error.data?.detail // @ts-ignore
          : error.data?.detail[0].msg || "При выполнении запроса что-то пошло не так",
        {
          variant: Variants.ERROR,
        },
      );
    }
  }, [postBannerAdminState.error, putBannerAdminState.error]);

  useEffect(() => {
    if (postBannerAdminState.data || putBannerAdminState.data) {
      setShowSuccess(true);
    }
  }, [postBannerAdminState.data, putBannerAdminState.data]);

  useEffect(() => {
    if ((form.formState.isValid && (currentImage.file || currentImage.link.length > 0)) || !form.formState.isSubmitted) {
      setImageError("");
    } else {
      if (!(currentImage.file || currentImage.link.length > 0)) setImageError("Это обязательное поле");
    }
  }, [form.formState.isValid, form.formState.isDirty, form.formState.isSubmitted]);

  const hideSuccess = () => {
    setShowSuccess(false);
    navigate(Routes.SYSTEM_BANNERS_PAGE);
  };

  const submit = (data: ApiV1BannersPost) => {
    if (!id && !(currentImage.file || currentImage.link.length > 0)) {
      setImageError("Это обязательное поле");
    } else {
      const banner = currentImage.file ? { ...data, file: currentImage.file } : data;
      setImageError("");
      if (id) {
        putBannerAdmin({ bannerId: id, ApiV1BannersBannerIdPut: createFormData(banner) });
      } else {
        postBannerAdmin({ ApiV1BannersPost: createFormData(banner) });
      }
    }
  };

  const changeImage: MediaUploader["onChange"] = (file, resolve) => {
    if (file) {
      const linkBlob = URL.createObjectURL(file);
      setCurrentImage({ link: linkBlob, file });
      resolve(linkBlob);
    } else {
      setCurrentImage({ link: "", file: null });
      resolve("");
    }
  };

  return {
    form,
    isLoading: postBannerAdminState.isLoading,
    submit,
    showSuccess,
    hideSuccess,
    changeImage,
    currentImage,
    setCurrentImage,
    imageError,
    setImageError,
  };
}
