import { partnersAdminApi } from "@/app/api/apiGenerator/admin";
import { DashboardWidgetEntity } from "@/entities/dashboard/widget";

import { DashboardWidgetsWrapper } from "./DashboardWidgets.styled";

export function DashboardWidgets() {
  const { data } = partnersAdminApi.useGetWidgetsPublicAdminQuery();

  return (
    <DashboardWidgetsWrapper>
      {data && data.map((menu, index) => <DashboardWidgetEntity key={menu.id} menu={menu} area={`item${index + 1}`} />)}
    </DashboardWidgetsWrapper>
  );
}
