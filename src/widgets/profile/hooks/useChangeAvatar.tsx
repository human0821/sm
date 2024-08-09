import type { RootState } from "@/app/store";

import { useDispatch, useSelector } from "react-redux";

import { useUpdateAvatarMutation } from "@/app/api/user/api";
import { setModal } from "@/app/store/app/slice";
import { setUser } from "@/app/store/user/slice";
import { ModalDialogEntity, ModalDialogTypes } from "@/entities/modal";
import ValidationErrors from "@/shared/consts/validationErrors";

export function useChangeAvatar() {
  const user = useSelector((state: RootState) => state.user.user);
  const [updateAvatar] = useUpdateAvatarMutation();
  const dispatch = useDispatch();

  const handleUploadAvatar: MediaUploader["onChange"] = (file, resolve, reject) => {
    if (user) {
      if (file) {
        const body = new FormData();
        body.append("avatar", file);

        updateAvatar({ body, userId: user.id })
          .unwrap()
          .then((response) => {
            const avatar = response?.avatar;
            if (avatar) {
              dispatch(
                setUser({
                  ...user,
                  avatar,
                }),
              );
              resolve(avatar);
            } else {
              reject(ValidationErrors.UNEXPECTED);
            }
          })
          .catch(() => {
            reject(ValidationErrors.UNEXPECTED);
          });
      } else {
        dispatch(
          setModal({
            show: true,
            component: (
              <ModalDialogEntity
                title="Вы действительно хотите удалить фото?"
                type={ModalDialogTypes.QUESTION}
                buttons={[
                  {
                    variant: "contained",
                    children: "Нет",
                    onClick: () => dispatch(setModal({ show: false })),
                  },
                  {
                    variant: "outlined",
                    children: "Да",
                    onClick: () => {
                      updateAvatar({ userId: user.id })
                        .unwrap()
                        .then(() => {
                          dispatch(
                            setUser({
                              ...user,
                              avatar: null,
                            }),
                          );
                          dispatch(setModal({ show: false }));
                          resolve(true);
                        })
                        .catch(() => {
                          reject(ValidationErrors.UNEXPECTED);
                        });
                    },
                  },
                ]}
              />
            ),
          }),
        );
      }
    } else {
      reject(ValidationErrors.LOGIN);
    }
  };

  return {
    handleUploadAvatar,
  };
}
