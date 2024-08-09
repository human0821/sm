interface TabProps {
  value: string;
  label: string;
  disabled?: boolean;
}
interface TabsData {
  items: TabsDataItemType[];
  currentValue: string;
  onChange: (event: React.SyntheticEvent<Element, Event>, value: any) => void;
  maxWidth?: number;
  scrollButtons?: boolean | "auto";
  background?: string;
}
