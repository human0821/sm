import { useSnackbar } from "notistack";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import {
  useGetNewsDetailQuery,
  useUnvoteSurveyMutation,
  useVoteSurveyMutation,
  useFreeAnswersQuery,
} from "@/app/api/news/api";
import { Variants } from "@/shared/consts/variants";
import { useActions } from "@/shared/hooks/useActions";
import { UNVOTE_ERROR, VOTE_ERROR } from "@/widgets/news-box/consts";

export const useSurveyAction = () => {
  const { enqueueSnackbar } = useSnackbar();
  const urlParams = useParams();
  const { id: newsId } = urlParams;
  const { data, isError, isFetching } = useGetNewsDetailQuery({ id: newsId! });
  const { data: freeAnswersData, isError: freeAnswersIsError } = useFreeAnswersQuery({ nid: newsId! });
  const [voteSurvey, voteSurveyState] = useVoteSurveyMutation();
  const [unvoteSurvey, unvoteSurveyState] = useUnvoteSurveyMutation();
  const actions = useActions();

  useEffect(() => {
    if (voteSurveyState.isError) {
      enqueueSnackbar(VOTE_ERROR, {
        variant: Variants.ERROR,
      });
    }
  }, [voteSurveyState]);

  useEffect(() => {
    if (unvoteSurveyState.isError) {
      enqueueSnackbar(UNVOTE_ERROR, {
        variant: Variants.ERROR,
      });
    }
  }, [unvoteSurveyState]);

  useEffect(() => {
    if (!isFetching && data) {
      actions.setSurveyAnswersForNewsId({ newsId: Number(newsId!), answers: data.answers || [] });
    }
  }, [isFetching]);

  const onVote = (event: React.MouseEvent<HTMLDivElement>) => {
    const answerId = Number(event.currentTarget.id);
    return voteSurvey({
      id: answerId,
      nid: newsId!,
      answer: null,
      free_answer: false,
    });
  };

  const onUnvote = (answerId?: string) => unvoteSurvey({ nid: Number(newsId), answerId });

  const onFreeAnswer = (state: TextareaContainer.ContainerState) =>
    voteSurvey({
      id: null,
      nid: newsId!,
      answer: state.value,
      free_answer: true,
      is_anonymous: state.anonymous,
    });

  return {
    data,
    isError,
    freeAnswersData,
    freeAnswersIsError,
    onVote,
    onUnvote,
    onFreeAnswer,
  };
};
