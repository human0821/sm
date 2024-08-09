import type { RootState } from "@/app/store";

import { Box } from "@mui/material";
import { useContext, useMemo } from "react";
import { useSelector } from "react-redux";

import { useGetProfileQuery } from "@/app/api/user/api";
import { RoleContext } from "@/shared/utils/rolesHelpers";
import {
  CaseProfileWidget,
  ProfileChangePasswordWidget,
  ProfileDeliveryWidget,
  ProfileInfoWidget,
  ProfileManagerWidget,
} from "@/widgets/profile";
import { BonusProfileWidget } from "@/widgets/profile/ui/BonusProfileWidget/BonusProfileWidget";

import { Card, Grid } from "./ProfileMainPage.styled";

export function ProfileMainPage() {
  const { data: profile } = useGetProfileQuery();
  const foundRoles = useContext(RoleContext);
  const userId = useSelector((state: RootState) => state.user.user?.id || "");

  const enableDeliveryWidget = !(foundRoles?.isSeller || foundRoles?.isPartnerPurchasingManager || foundRoles?.isEmployer);

  const changePasswordOrder = useMemo(() => {
    if (foundRoles?.isPartnerPurchasingManager) {
      return 3;
    }
    if (foundRoles?.isSeller) {
      return 2;
    }
    return 4;
  }, [foundRoles]);

  const managerOrder = useMemo(() => {
    if (
      (foundRoles?.isSeller || foundRoles?.isPartnerPurchasingManager) &&
      !foundRoles?.isPartnerAdmin &&
      !foundRoles.isPartnerAccountant
    ) {
      return 4;
    }
    return 2;
  }, [foundRoles]);

  const enableCaseWidget = useMemo(() => {
    return foundRoles?.isPartner || foundRoles?.isPartnerAccountant || foundRoles?.isPartnerAdmin;
  }, [foundRoles]);

  const enableBonusWidget = useMemo(() => {
    return (
      foundRoles?.isPartner ||
      foundRoles?.isPartnerAccountant ||
      foundRoles?.isPartnerPurchasingManager ||
      foundRoles?.isPartnerAdmin
    );
  }, [foundRoles]);

  return (
    <Grid variant={foundRoles?.isPartnerPurchasingManager ? "second" : "default"}>
      <Card order={1} colSpan={enableDeliveryWidget ? 2 : 1}>
        {profile && <ProfileInfoWidget user={profile} />}
        {enableDeliveryWidget && <ProfileDeliveryWidget canEdit={!foundRoles?.isPartnerAccountant} />}
      </Card>
      {!foundRoles?.isEmployer && (
        <Card order={managerOrder}>
          <ProfileManagerWidget manager={profile?.manager} />
        </Card>
      )}
      {foundRoles?.isSeller && !foundRoles?.isPartnerAdmin && !foundRoles.isPartnerAccountant && (
        <div style={{ order: 3 }}></div>
      )}
      {enableCaseWidget && (
        <Box order={3}>
          <CaseProfileWidget />
        </Box>
      )}
      <Card order={changePasswordOrder}>
        <ProfileChangePasswordWidget userId={userId} />
      </Card>
      {enableBonusWidget && (
        <Box
          sx={{
            order: foundRoles?.isPartnerPurchasingManager ? 2 : 6,
            colSpan: foundRoles?.isPartnerPurchasingManager ? 2 : 1,
          }}>
          <BonusProfileWidget />
        </Box>
      )}
    </Grid>
  );
}
