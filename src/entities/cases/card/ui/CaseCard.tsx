import type { CaseSegmentListSchema } from "@/app/api/apiGenerator/common/casesApi";

import { Stack } from "@mui/material";

import { mediaQueryHelp } from "@/app/styles/functions";
import { CaseCondition } from "@/shared/ui/CaseCondition/CaseCondition";

import { PrivilegesTitle, CardWrapper, CardLine, CardTitle, PrivilegesWrapper } from "./CaseCard.styled";

export const CaseCard = ({
  isCurrent,
  analyzedPeriodStart,
  analyzedPeriodEnd,
  name,
  amountGt,
  amountLt,
  privileges,
}: {
  isCurrent?: boolean;
} & CaseSegmentListSchema) => {
  return (
    <CardWrapper current={isCurrent}>
      <Stack sx={mediaQueryHelp({ gap: { xs: "24px", l: "30px" } })}>
        <CardTitle>{name}</CardTitle>
        <CaseCondition
          isCurrentCase={false}
          dates={[analyzedPeriodStart || "", analyzedPeriodEnd || ""]}
          price={[amountGt ?? null, amountLt ?? null]}
        />
        <CardLine />
        <PrivilegesWrapper>
          <Stack sx={mediaQueryHelp({ gap: { xs: "16px", s: "24px", m: "30px" } })}>
            <PrivilegesTitle>{Object.keys(privileges || {}).length ? "Привилегии" : "Привилегий нет"}</PrivilegesTitle>
            <Stack component={"ul"} sx={mediaQueryHelp({ gap: { xs: "16px", s: "24px", m: "30px" } })}>
              {Object.values((privileges || {}) as Record<string, string>).map((privilege: string) => (
                <li key={privilege}>{privilege}</li>
              ))}
            </Stack>
          </Stack>
        </PrivilegesWrapper>
      </Stack>
    </CardWrapper>
  );
};
