import { motion } from "framer-motion";

import { CheckIcon, ErrorIcon } from "@/assets/icons";
import { motionFade } from "@/shared/consts/motion";
import { ButtonLoading } from "@/shared/ui/Button/Loading/ButtonLoading";

import { useActivation } from "../hooks/useActivation";

export const ActivationButton = ({
  isActive,
  mutationHook,
  id,
  name,
  withName,
  size = "medium",
  withResultModal,
  activateBodyField,
  setIsActive,
  withTag,
  forDeactivation,
}: Activation.Button) => {
  const { activateAccount, currentIsActive, currentForDeactivation } = useActivation({
    isActive,
    id,
    name,
    useActivationMutation: mutationHook,
    withResultModal,
    activateBodyField,
    setIsActive,
    withTag,
    forDeactivation,
  });

  return (
    <>
      {currentForDeactivation ? (
        <motion.div {...motionFade} key="request">
          <ButtonLoading
            variant="contained"
            size={size}
            startIcon={
              <CheckIcon style={{ width: 18, height: 16, marginRight: 6, marginLeft: 2, transform: "translateY(-1px)" }} />
            }
            sx={{ padding: "5px 22px", whiteSpace: "nowrap" }}
            disabled>
            Запрос отправлен
          </ButtonLoading>
        </motion.div>
      ) : (
        <>
          {currentIsActive ? (
            <motion.div {...motionFade} key="deactive">
              <ButtonLoading
                variant="outlined"
                color="error"
                size={size}
                startIcon={
                  <ErrorIcon
                    style={{ width: 12, height: 12, marginRight: 8, marginLeft: 4, transform: "translateY(-1px)" }}
                  />
                }
                sx={{ padding: "5px 22px" }}
                onClick={activateAccount}>
                Деактивировать
              </ButtonLoading>
            </motion.div>
          ) : (
            <motion.div {...motionFade} key="active">
              <ButtonLoading
                variant="contained"
                size={size}
                startIcon={
                  withName ? undefined : (
                    <CheckIcon
                      style={{ width: 18, height: 16, marginRight: 6, marginLeft: 2, transform: "translateY(-1px)" }}
                    />
                  )
                }
                sx={{ padding: "5px 22px" }}
                onClick={activateAccount}>
                {withName ? name : "Активировать"}
              </ButtonLoading>
            </motion.div>
          )}
        </>
      )}
    </>
  );
};
