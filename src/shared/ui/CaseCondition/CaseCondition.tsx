import { Box } from "@mui/material";

import { mediaQueryHelp } from "@/app/styles/functions";
import { splitNumber } from "@/shared/utils/stringHelpers";
import { CONDITIONS } from "@/widgets/profile/consts";
import { CaseItemTitle, ConditionsWrapper } from "@/widgets/profile/ui/Cases/ProfileCases.styled";

import { DateFormat } from "../DateFormat/DateFormat";

export function CaseCondition({ dates, price, isCurrentCase = true }: CaseConditionProps) {
  return (
    <ConditionsWrapper>
      <CaseItemTitle sx={mediaQueryHelp({ marginBottom: { xs: "24px", l: "30px" } })}>{CONDITIONS}</CaseItemTitle>
      <ul>
        <Box
          component={"li"}
          sx={mediaQueryHelp({
            marginBottom: isCurrentCase ? { xs: "16px", l: "33px" } : { xs: "16px", s: "20px", m: "30px" },
          })}>
          Период{isCurrentCase && ": "} {!isCurrentCase && <br />}
          <DateFormat date={dates[0]} /> - <DateFormat date={dates[1]} />
        </Box>
        <li>
          Сумма{isCurrentCase && ": "} {!isCurrentCase && <br />}{" "}
          {price ? `от ${splitNumber(price[0] ?? 0)} до ${splitNumber(price[1] ?? "-")}` : "-"}
        </li>
      </ul>
    </ConditionsWrapper>
  );
}
