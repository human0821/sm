import { CloseIcon } from "@/assets/icons";
import { Loader } from "@/shared/ui/Button/Loading/ButtonLoading.styled";

import {
  SurveyInfo,
  SurveyRadioAnswer,
  SurveyRadioButton,
  SurveyRadioReset,
  SurveyRadioWrapper,
  LoaderWrapper,
} from "./SurveyRadio.styled";

export function SurveyRadio({
  surveyItem,
  surveyAnswered,
  hideResultsFlag,
  onSelect,
  onCancel,
  isLoading,
}: {
  surveyItem: Survey.Item;
  surveyAnswered: boolean;
  hideResultsFlag: boolean;
  onSelect?: () => any;
  onCancel?: typeof onSelect;
  isLoading?: boolean;
}) {
  const handleAction = (callback: typeof onSelect) => {
    if (callback) {
      callback();
    }
  };
  return (
    <SurveyRadioWrapper>
      <SurveyRadioButton
        type="button"
        active={Number(surveyItem.isAnswer)}
        readonly={Number(surveyItem.canSelect)}
        loading={Number(false)}
        onClick={() => surveyItem.canSelect && handleAction(onSelect)}>
        <SurveyRadioAnswer>{surveyItem.answer}</SurveyRadioAnswer>
        {isLoading && (
          <LoaderWrapper>
            <Loader />
          </LoaderWrapper>
        )}
        <SurveyInfo>
          {!isLoading && (
            <span>
              {typeof surveyItem?.percent === "number" && !surveyItem.freeAnswer
                ? `${surveyItem.percent}%`
                : `${surveyAnswered && hideResultsFlag ? "-" : ""}`}
            </span>
          )}
        </SurveyInfo>
      </SurveyRadioButton>
      {surveyItem.isAnswer && (
        <SurveyRadioReset onClick={() => handleAction(onCancel)}>
          <CloseIcon />
          <span>Отменить свой голос</span>
        </SurveyRadioReset>
      )}
    </SurveyRadioWrapper>
  );
}
