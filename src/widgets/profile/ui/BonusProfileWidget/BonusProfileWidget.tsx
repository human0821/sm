import { Box, Card, Stack, Typography } from "@mui/material";

import { casesApi, userApi } from "@/app/api/apiGenerator/common";
import Routes from "@/app/routes/consts/routes";
import { mediaQueryHelp } from "@/app/styles/functions";
import { InfoEmptyText } from "@/entities/counterparties/info/ui/CounterpartyInfo.styled";
import { BonusAmount, BonusAmountVariant } from "@/shared/ui/BonusAmount/BonusAmount";
import { Loader } from "@/shared/ui/Button/Loading/ButtonLoading.styled";
import { MoreDetails } from "@/shared/ui/MoreDetails/MoreDetails";

import { LoaderWrapper } from "../Cases/ProfileCases.styled";

export function BonusProfileWidget() {
  const { data, isFetching } = casesApi.useGetUsersCaseQuery(),
    { data: userProfile } = userApi.useProfileQuery();

  const order = [
    { id: "2123123", amount: "+100" },
    { id: "2123123", amount: "-564" },
    { id: "2123123", amount: "+205" },
    { id: "2123123", amount: "-564" },
    { id: "2123123", amount: "+205" },
    { id: "2123123", amount: "-564" },
    { id: "2123123", amount: "+205" },
  ];

  return (
    <Card sx={{ height: "100%" }}>
      <Stack gap={"30px"} height={"100%"}>
        <Stack gap="20px">
          <Typography variant="h3">Бонусная программа</Typography>
          <Box sx={{ span: { fontSize: "2rem" }, svg: { width: "32px", height: "32px" } }}>
            <BonusAmount value={userProfile?.bonus.count ? `${userProfile?.bonus.count}` : "0"} />
          </Box>
        </Stack>

        <hr />

        {isFetching ? (
          <LoaderWrapper>
            <Loader />
          </LoaderWrapper>
        ) : data ? (
          <Stack gap={"10px"}>
            {order.map((item, index) => (
              <Stack key={index} gap="20px" direction={"row"} alignItems={"end"} justifyContent={"space-between"}>
                <Box sx={mediaQueryHelp({ fontSize: { xs: "0.875rem", s: "1.125rem" } })}>Заказ №{item.id}</Box>
                <BonusAmount value={item.amount} variant={BonusAmountVariant[+item.amount > 0 ? "GREEN" : "RED"]} />
              </Stack>
            ))}
          </Stack>
        ) : (
          <InfoEmptyText sx={{ fontSize: "1.125rem", height: "100%" }}>У вас пока нет истории бонусов.</InfoEmptyText>
        )}

        <Box mt={"auto"} component={"hr"} />

        <MoreDetails link={Routes.PROFILE_BONUS_PAGE} />
      </Stack>
    </Card>
  );
}
