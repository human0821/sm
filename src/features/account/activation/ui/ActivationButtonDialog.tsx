import { ButtonLoading } from "@/shared/ui/Button/Loading/ButtonLoading";

import { useActivationActions } from "../hooks/useActivationActions";

export function ActivationButtonDialog({
  activateBodyField,
  currentIsActive,
  id,
  withResultModal,
  useActivationMutation,
  setCurrentIsActive,
  setIsActive,
  name,
  withTag,
  forDeactivation,
  setCurrentForDeactivation,
}: Activation.ActionsHook) {
  const { isLoading, handleClick } = useActivationActions({
    activateBodyField,
    currentIsActive,
    id,
    useActivationMutation,
    setCurrentIsActive,
    setIsActive,
    withResultModal,
    name,
    withTag,
    forDeactivation,
    setCurrentForDeactivation,
  });

  return (
    <ButtonLoading type="button" variant="outlined" loading={isLoading} onClick={handleClick}>
      Да
    </ButtonLoading>
  );
}
