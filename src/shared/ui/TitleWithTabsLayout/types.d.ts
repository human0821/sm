import type { TabsOwnProps, TabsProps } from "@mui/material";

interface TitleWithTabsLayoutProps {
  title: string;
  tabs: { label: string; value: string }[];
  onChange?: (value: string) => void;
  tabsProps?: TabsProps & TabsOwnProps;
  queryParams?: boolean;
}
