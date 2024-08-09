import { Card, Stack } from "@mui/material";

import { mediaQueryHelp } from "@/app/styles/functions";
import { CaseCard } from "@/entities/cases/card";
import { InfoEmptyText } from "@/entities/counterparties/info/ui/CounterpartyInfo.styled";
import { Loader } from "@/shared/ui/Button/Loading/ButtonLoading.styled";
import { CaseCondition } from "@/shared/ui/CaseCondition/CaseCondition";
import { DateFormat } from "@/shared/ui/DateFormat/DateFormat";

import {
  CaseItemTitle,
  CasesContainer,
  CasesGrid,
  CasesHistoryList,
  LoaderWrapper,
  NextMonthCases,
  NextMonthCasesItems,
  NextMonthCasesTitle,
  ProfileCasesWrapper,
  YourCaseTitle,
} from "./ProfileCases.styled";
import { AVAIL_CASES, CASES_HISTORY, CASE_NAME, CASE_TARIFF, NO_CASE, NO_HISTORY } from "../../consts";
import { useCases } from "../../hooks/useCases";

export const ProfileCases: React.FC = () => {
  const { data, isFetching, currentCaseInfoList, casesList } = useCases();
  const EmptyText = ({ text = NO_CASE }) => (
    <InfoEmptyText sx={mediaQueryHelp({ fontSize: { xs: "0.875rem", s: "1.125rem", l: "1.25rem", xl: "1.5rem" } })}>
      {text}
    </InfoEmptyText>
  );

  return (
    <ProfileCasesWrapper>
      <CasesGrid>
        <CasesContainer>
          <Card sx={{ minHeight: "100%" }}>
            <Stack sx={mediaQueryHelp({ gap: { xs: "24px", l: "30px" } })}>
              <YourCaseTitle>{CASE_NAME}</YourCaseTitle>

              {isFetching && (
                <LoaderWrapper>
                  <Loader />
                </LoaderWrapper>
              )}

              {!isFetching && !data && <EmptyText />}
              {!isFetching && data && (
                <Stack sx={mediaQueryHelp({ gap: { xs: "24px", l: "30px" } })}>
                  <YourCaseTitle>{data.caseSegment?.name}</YourCaseTitle>
                  <CaseCondition
                    dates={[data.caseSegment?.analyzedPeriodStart || "", data.caseSegment?.analyzedPeriodEnd || ""]}
                    price={[data.caseSegment?.amountGt ?? null, data.caseSegment?.amountLt ?? null]}
                  />
                  <Stack gap={"17px"}>
                    {currentCaseInfoList.map(([title, value], i) => (
                      <CaseItemTitle key={i}>
                        <span>{title}</span>
                        <span />
                        <span>{value}</span>
                      </CaseItemTitle>
                    ))}
                  </Stack>
                </Stack>
              )}
            </Stack>
          </Card>
        </CasesContainer>

        <CasesContainer>
          <Card
            sx={mediaQueryHelp({
              minHeight: { xs: "100%" },
              height: data?.historyCases?.length ? { xs: "286px", s: "369px" } : {},
            })}>
            <Stack sx={mediaQueryHelp({ gap: { xs: "24px", l: "30px" } })} height={"100%"}>
              <YourCaseTitle>{CASES_HISTORY}</YourCaseTitle>

              {isFetching && (
                <LoaderWrapper>
                  <Loader />
                </LoaderWrapper>
              )}

              {!isFetching && !data?.historyCases?.length && <EmptyText text={NO_HISTORY} />}
              {data?.historyCases && data.historyCases.length > 0 && (
                <CasesHistoryList>
                  {data?.historyCases?.map((x) => (
                    <CaseItemTitle blackTitle={true} key={x.id}>
                      <span>
                        {CASE_TARIFF} {x.name}
                      </span>
                      <span />
                      <span>
                        <DateFormat date={x.dateChange} />
                      </span>
                    </CaseItemTitle>
                  ))}
                </CasesHistoryList>
              )}
            </Stack>
          </Card>
        </CasesContainer>
      </CasesGrid>

      <NextMonthCases>
        {!isFetching && casesList?.length && (
          <>
            <NextMonthCasesTitle>
              <span>{AVAIL_CASES}</span>
            </NextMonthCasesTitle>
            <NextMonthCasesItems>
              {casesList?.map(({ id, ...other }) => (
                <CaseCard key={id} id={id} isCurrent={id === data?.caseSegment?.id} {...other} />
              ))}
            </NextMonthCasesItems>
          </>
        )}
      </NextMonthCases>
    </ProfileCasesWrapper>
  );
};
