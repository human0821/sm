import Routes from "@/app/routes/consts/routes";
import LayoutMenuIds from "@/app/store/layout/consts/LayoutMenuIds";
import {
  MenuAccountIcon,
  MenuCatalogIcon,
  MenuFaqIcon,
  MenuNotificationsIcon,
  MenuPricesIcon,
  MenuProcurementIcon,
  MenuProfileIcon,
  MenuPromotionsIcon,
  MenuSalesIcon,
  MenuStatisticsIcon,
  MenuSystemIcon,
} from "@/assets/icons";

export function useGetMenuLink({ menu }: { menu: StoreLayout.Menu }) {
  switch (menu.id) {
    case LayoutMenuIds.PROFILE:
      return {
        path: Routes.PROFILE_PAGE,
        name: menu.name,
        icon: <MenuProfileIcon />,
      };
    case LayoutMenuIds.CATALOG:
      return {
        path: Routes.CATALOG_PAGE,
        name: menu.name,
        icon: <MenuCatalogIcon />,
      };
    case LayoutMenuIds.PRICES:
      return {
        path: Routes.MAIN_PAGE,
        name: menu.name,
        icon: <MenuPricesIcon />,
      };
    case LayoutMenuIds.PROMOTIONS:
      return {
        path: Routes.PROMOTIONS_PAGE,
        name: menu.name,
        icon: <MenuPromotionsIcon />,
      };
    case LayoutMenuIds.SALES:
      return {
        path: Routes.MAIN_PAGE,
        name: menu.name,
        icon: <MenuSalesIcon />,
      };
    case LayoutMenuIds.PROCUREMENT:
      return {
        path: Routes.MAIN_PAGE,
        name: menu.name,
        icon: <MenuProcurementIcon />,
      };
    case LayoutMenuIds.NOTIFICATIONS:
      return {
        path: Routes.NOTIFICATIONS_PAGE,
        name: menu.name,
        icon: <MenuNotificationsIcon />,
      };
    case LayoutMenuIds.ACCOUNT:
      return {
        path: Routes.ACCOUNT_EMPLOYEES_PAGE,
        name: menu.name,
        icon: <MenuAccountIcon />,
      };
    case LayoutMenuIds.SYSTEM:
      return {
        path: Routes.SYSTEM_PAGE,
        name: menu.name,
        icon: <MenuSystemIcon />,
      };
    case LayoutMenuIds.STATISTICS:
      return {
        path: Routes.MAIN_PAGE,
        name: menu.name,
        icon: <MenuStatisticsIcon />,
      };
    case LayoutMenuIds.FAQ:
      return {
        path: Routes.FAQ_PAGE,
        name: menu.name,
        icon: <MenuFaqIcon />,
      };
    default:
      return undefined;
  }
}
