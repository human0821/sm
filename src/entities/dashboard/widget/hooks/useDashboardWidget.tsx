import type { WidgetMainSchema } from "@/app/api/apiGenerator/admin/partnersAdminApi";

import Routes from "@/app/routes/consts/routes";
import LayoutMenuIds from "@/app/store/layout/consts/LayoutMenuIds";
import Colors from "@/app/styles/colors";
import {
  WidgetCatalogIcon,
  WidgetFaqIcon,
  WidgetPricesIcon,
  WidgetProcurementIcon,
  WidgetProfileIcon,
  WidgetPromotionsIcon,
  WidgetSalesIcon,
  WidgetStatisticsIcon,
  WidgetSystemIcon,
} from "@/assets/icons/widgets";

export function useGetDashboardWidget({ menu }: { menu: WidgetMainSchema }): DashboardWidgetEntity | undefined {
  switch (menu.id) {
    case LayoutMenuIds.PROFILE:
      return {
        id: menu.id,
        path: Routes.PROFILE_PAGE,
        name: menu.name,
        icon: <WidgetProfileIcon />,
        color: Colors.YELLOW_MAIN,
      };
    case LayoutMenuIds.CATALOG:
      return {
        id: menu.id,
        path: Routes.MAIN_PAGE,
        name: menu.name,
        icon: <WidgetCatalogIcon />,
        color: Colors.BLUE_LIGHT,
      };
    case LayoutMenuIds.PRICES:
      return {
        id: menu.id,
        path: Routes.MAIN_PAGE,
        name: menu.name,
        icon: <WidgetPricesIcon />,
        color: Colors.BLUE_PALE,
      };
    case LayoutMenuIds.PROMOTIONS:
      return {
        id: menu.id,
        path: Routes.MAIN_PAGE,
        name: menu.name,
        icon: <WidgetPromotionsIcon />,
        color: Colors.RED_PALE,
      };
    case LayoutMenuIds.SALES:
      return {
        id: menu.id,
        path: Routes.MAIN_PAGE,
        name: menu.name,
        icon: <WidgetSalesIcon />,
        color: Colors.GREY_LIGHT,
      };
    case LayoutMenuIds.PROCUREMENT:
      return {
        id: menu.id,
        path: Routes.MAIN_PAGE,
        name: menu.name,
        icon: <WidgetProcurementIcon />,
        color: Colors.ORANGE_PALE,
      };
    case LayoutMenuIds.ACCOUNT:
      return {
        id: menu.id,
        path: Routes.ACCOUNT_EMPLOYEES_PAGE,
        name: menu.name,
        icon: <WidgetSystemIcon />,
        color: Colors.GREEN_PALE,
      };
    case LayoutMenuIds.STATISTICS:
      return {
        id: menu.id,
        path: Routes.MAIN_PAGE,
        name: menu.name,
        icon: <WidgetStatisticsIcon />,
        color: Colors.PINK_LIGHT,
      };
    case LayoutMenuIds.FAQ:
      return {
        id: menu.id,
        path: Routes.FAQ_PAGE,
        name: menu.name,
        icon: <WidgetFaqIcon />,
        color: Colors.BLUE_LIGHT,
      };
    default:
      return undefined;
  }
}
