import type { WidgetMainSchema } from "@/app/api/apiGenerator/admin/partnersAdminApi";

import parser from "html-react-parser";

import {
  DashboardWidgetEntityLogo,
  DashboardWidgetEntityName,
  DashboardWidgetEntityWrapper,
} from "./DashboardWidgetEntity.styled";
import { useGetDashboardWidget } from "../hooks/useDashboardWidget";

export function DashboardWidgetEntity({ menu, area }: { menu: WidgetMainSchema; area: string }) {
  const widget = useGetDashboardWidget({ menu });
  if (widget) {
    return (
      <DashboardWidgetEntityWrapper color={widget.color} href={widget.path} id={widget.id} area={area}>
        <DashboardWidgetEntityName variant="h2">{parser(widget.name)}</DashboardWidgetEntityName>
        <DashboardWidgetEntityLogo>{widget.icon}</DashboardWidgetEntityLogo>
      </DashboardWidgetEntityWrapper>
    );
  }

  return <></>;
}
