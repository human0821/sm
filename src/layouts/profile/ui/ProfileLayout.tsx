import { Box, Typography } from "@mui/material";
import React, { useContext, useMemo, useState } from "react";
import { useLocation, useNavigate, useOutlet } from "react-router-dom";

import Routes from "@/app/routes/consts/routes";
import { mediaQueryHelp } from "@/app/styles/functions";
import { ProfileExitButton } from "@/features/profile/ui/Exit/ProfileExitButton";
import { Tabs } from "@/shared/ui/Tabs/Tabs";
import { RoleContext } from "@/shared/utils/rolesHelpers";

import { ProfileHeader, ProfileWrapper, TabsWrapper } from "./ProfileLayout.styled";
import { profileTabsList } from "../consts/profileTabsList";

export function ProfileLayout() {
  const currentOutlet = useOutlet();
  const location = useLocation();
  const navigate = useNavigate();
  const [value, setValue] = useState(location.pathname);
  const foundRoles = useContext(RoleContext);

  const tabsList = useMemo(() => {
    if (foundRoles?.isPartner || foundRoles?.isPartnerAccountant || foundRoles?.isPartnerAdmin) {
      return profileTabsList;
    }
    let tabs = profileTabsList.filter((tab) => tab.value !== Routes.PROFILE_CASES_PAGE);
    if (!foundRoles?.isPartnerPurchasingManager) {
      tabs = tabs.filter((tab) => tab.value !== Routes.PROFILE_BONUS_PAGE);
    }
    return tabs;
  }, [foundRoles]);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    navigate(newValue);
  };

  return (
    <ProfileWrapper>
      <ProfileHeader>
        {tabsList.length === 1 ? (
          <Typography variant="h1">{tabsList[0].label}</Typography>
        ) : (
          <TabsWrapper>
            <Tabs items={tabsList} currentValue={value} onChange={handleChange} maxWidth={944} />
          </TabsWrapper>
        )}
        <Box sx={mediaQueryHelp({ display: { xs: "none", xl: "block" } })}>
          <ProfileExitButton />
        </Box>
      </ProfileHeader>
      {currentOutlet}

      <Box sx={mediaQueryHelp({ display: { xs: "block", xl: "none" } })} ml={"auto"}>
        <ProfileExitButton />
      </Box>
    </ProfileWrapper>
  );
}
