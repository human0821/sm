import { Box, Card, Stack, Typography } from "@mui/material";

import { casesApi } from "@/app/api/apiGenerator/common";
import Routes from "@/app/routes/consts/routes";
import { InfoEmptyText } from "@/entities/counterparties/info/ui/CounterpartyInfo.styled";
import { DASH } from "@/shared/consts/dateFormat";
import { Loader } from "@/shared/ui/Button/Loading/ButtonLoading.styled";
import { CaseCondition } from "@/shared/ui/CaseCondition/CaseCondition";
import { DateFormat } from "@/shared/ui/DateFormat/DateFormat";
import { Flex } from "@/shared/ui/Flex";
import { MoreDetails } from "@/shared/ui/MoreDetails/MoreDetails";
import { Tag } from "@/shared/ui/Tag/Tag";
import { convertToRouble } from "@/shared/utils/stringHelpers";

import { CaseProfileListWrap } from "./CaseProfileWidget.styled";
import { CaseItemTitle, LoaderWrapper } from "../Cases/ProfileCases.styled";

export function CaseProfileWidget() {
  const { data, isFetching } = casesApi.useGetUsersCaseQuery();

  const rows = [
    ["Оплаченный оборот на данный момент", convertToRouble(data?.paidAmount || 0) || DASH],
    ["Иммунитет на снижение", <DateFormat date={data?.dateImmunity} key={1} />],
    ["Следующий кейс", data?.caseSegment?.children?.name || DASH],
  ];

  return (
    <Card sx={{ height: "100%", position: "relative" }}>
      <Stack gap={"30px"} height={"100%"}>
        <Flex justifyContent={"space-between"}>
          <Typography variant="h1">{data?.caseSegment?.name || "Кейсы"}</Typography>
          {!isFetching && data && <Tag isImportant name="Текущий кейс" />}
        </Flex>

        <hr />

        {isFetching ? (
          <LoaderWrapper>
            <Loader />
          </LoaderWrapper>
        ) : data ? (
          <>
            <CaseProfileListWrap>
              <CaseCondition
                price={[data?.caseSegment?.amountGt || null, data?.caseSegment?.amountLt || null]}
                dates={[data?.caseSegment?.analyzedPeriodStart || "", data?.caseSegment?.analyzedPeriodStart || ""]}
              />
            </CaseProfileListWrap>
            <Stack gap={"10px"}>
              {rows.map(([label, value], i) => (
                <CaseItemTitle key={i}>
                  <span>{label}</span> <span /> <span>{value}</span>
                </CaseItemTitle>
              ))}
            </Stack>
          </>
        ) : (
          <InfoEmptyText sx={{ fontSize: "1.125rem", height: "100%" }}>У вас нет кейсов.</InfoEmptyText>
        )}

        <Box mt={"auto"} component={"hr"} />

        <MoreDetails link={Routes.PROFILE_CASES_PAGE} />
      </Stack>
    </Card>
  );
}
