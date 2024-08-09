import { bannersAdminApi } from "@/app/api/apiGenerator/admin";
import { ButtonIcon } from "@/shared/ui/Button";

import { DecreaseNumber, IncreaseNumber, NumbersWrapper, PositionNumber } from "./PositionBannerButton.styled";

export const PositionBannerButton = ({ id, positionNumber, maxNumber }: PositionBannerButton) => {
  const [upPosition, upPositionState] = bannersAdminApi.useUpPositionAdminMutation();
  const [downPosition, downPositionState] = bannersAdminApi.useDownPositionAdminMutation();

  const changePosition = (position: "down" | "up") => {
    if (position === "down") {
      downPosition({ bannerId: id });
    } else {
      upPosition({ bannerId: id });
    }
  };

  return (
    <NumbersWrapper>
      <div>
        {positionNumber !== 1 && (
          <ButtonIcon fullColor loader={downPositionState.isLoading} onClick={() => changePosition("down")}>
            <IncreaseNumber />
          </ButtonIcon>
        )}
      </div>
      <PositionNumber>{positionNumber}</PositionNumber>
      <div>
        {positionNumber !== maxNumber && (
          <ButtonIcon fullColor loader={upPositionState.isLoading} onClick={() => changePosition("up")}>
            <DecreaseNumber />
          </ButtonIcon>
        )}
      </div>
    </NumbersWrapper>
  );
};
