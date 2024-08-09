import { ArrowRightIcon } from "@/assets/icons";
import { useManagerFeedback } from "@/features/manager/hooks/useManagerFeedback";

import { FeedbackButton } from "./ManagerFeedbackButton.styled";

export function ManagerFeedbackButton() {
  const { showModal } = useManagerFeedback();
  return (
    <FeedbackButton
      variant="contained"
      size="large"
      sx={{ justifyContent: "space-between" }}
      endIcon={<ArrowRightIcon />}
      onClick={showModal}>
      Связаться с менеджером
    </FeedbackButton>
  );
}
