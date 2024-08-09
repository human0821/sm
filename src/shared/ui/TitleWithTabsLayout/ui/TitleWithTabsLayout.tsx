import type { TitleWithTabsLayoutProps } from "../types";

import { Box, Stack } from "@mui/material";
import { useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

import { AccountTitle } from "@/layouts/account/ui/AccountLayout.styled";
import { Tabs } from "@/shared/ui/Tabs/Tabs";

/** Макет для отображения заголовка с табами */
export function TitleWithTabsLayout({
  title = "Заголовок",
  tabs = [],
  onChange,
  tabsProps: TabsProps,
  queryParams,
}: TitleWithTabsLayoutProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentValue, setCurrentValue] = useState(
    queryParams ? searchParams.get("tab") || tabs[0]?.value : location.pathname,
  );

  const handleChange = (event: React.SyntheticEvent<Element, Event>, newValue: string) => {
    if (queryParams) {
      setSearchParams({ tab: newValue });
    } else {
      navigate(newValue);
    }
    setCurrentValue(newValue);
    onChange?.(newValue);
  };

  return (
    <Box mb={2}>
      <AccountTitle variant="h1">{title}</AccountTitle>
      {tabs.length > 0 && (
        <Stack gap={2}>
          <Tabs items={tabs} currentValue={currentValue} onChange={handleChange} {...TabsProps} />
        </Stack>
      )}
    </Box>
  );
}
