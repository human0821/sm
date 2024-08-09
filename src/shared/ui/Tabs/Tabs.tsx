import { Tab as MUITab, Tabs as MUITabs } from "@mui/material";

import { TabsContainer } from "./Tabs.styled";

export const Tabs: React.FC<TabsData> = ({
  items,
  currentValue,
  onChange,
  maxWidth,
  scrollButtons = true,
  background,
  ...props
}) => {
  return (
    <TabsContainer maxWidth={maxWidth}>
      <MUITabs
        value={currentValue}
        onChange={onChange}
        allowScrollButtonsMobile
        variant={"scrollable"}
        scrollButtons={scrollButtons}
        sx={{ background }}
        {...props}>
        {items.map((tab) => (
          <MUITab key={tab.value} value={tab.value} label={tab.label} disabled={tab.disabled} />
        ))}
      </MUITabs>
    </TabsContainer>
  );
};
