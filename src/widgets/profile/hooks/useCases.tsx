import { casesApi } from "@/app/api/apiGenerator/common";
import { DASH } from "@/shared/consts/dateFormat";
import { DateFormat } from "@/shared/ui/DateFormat/DateFormat";
import { convertToRouble } from "@/shared/utils/stringHelpers";

import { DATE_IMMUNITY, NEXT_CASE, PAID_AMOUNT } from "../consts";

export const useCases = () => {
  const { data, isFetching } = casesApi.useGetUsersCaseQuery();
  const { data: casesList } = casesApi.useGetCasesQuery();

  const currentCaseInfoList = data
    ? [
        [PAID_AMOUNT, `${convertToRouble(data.paidAmount || 0)}`],
        [DATE_IMMUNITY, <DateFormat date={data.dateImmunity} key={1} />],
        [NEXT_CASE, data.caseSegment?.children?.name || DASH],
      ]
    : [];

  return { data, isFetching, currentCaseInfoList, casesList };
};
