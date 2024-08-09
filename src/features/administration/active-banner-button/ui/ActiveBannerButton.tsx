import type { BannerSchema } from "@/app/api/apiGenerator/admin/bannersAdminApi";

import { motion } from "framer-motion";
import { useState } from "react";

import { bannersAdminApi } from "@/app/api/apiGenerator/admin";
import { PauseIcon, PlayIcon } from "@/assets/icons";
import { ModalDialogTypes } from "@/entities/modal";
import { motionFadeFlex } from "@/shared/consts/motion";
import { useRTKAlert } from "@/shared/hooks/useRTKAlert";
import { ButtonIcon } from "@/shared/ui/Button";
import CustomDialog from "@/shared/ui/DialogBox/DialogBox";

export const ActiveBannerButton = ({ id, active }: { id: BannerSchema["id"]; active: boolean }) => {
  const [bannerActivation, bannerActivationState] = bannersAdminApi.useBannerActivationAdminMutation();
  const [activeId, setActiveId] = useState<number>(0);
  const alert = useRTKAlert();

  const changeActive = () => {
    bannerActivation({ bannerId: id, bannerActivationSchema: { active: !active } }).then((x) => {
      setActiveId(0);
      alert("Запись успешно измена", "Не удалось изменить запись")(x);
    });
  };

  return (
    <>
      <ButtonIcon fullColor onClick={() => setActiveId(id)}>
        {active ? (
          <motion.div {...motionFadeFlex} key="pause">
            <PauseIcon />
          </motion.div>
        ) : (
          <motion.div {...motionFadeFlex} key="play">
            <PlayIcon />
          </motion.div>
        )}
      </ButtonIcon>
      {!!activeId && (
        <CustomDialog
          type={ModalDialogTypes.QUESTION}
          open={!!activeId}
          isLoading={bannerActivationState.isLoading}
          onClose={() => setActiveId(0)}
          onNotConfirm={() => setActiveId(0)}
          onConfirm={() => activeId && changeActive()}>
          {`Вы действительно хотите ${active ? "снять баннер с публикации" : "опубликовать баннер"}?`}
        </CustomDialog>
      )}
    </>
  );
};
