import { ErrorBoundary } from "react-error-boundary";
import { Helmet } from "react-helmet-async";

import { useGetProfileQuery } from "@/app/api/user/api";
import { BlockCardEntity } from "@/entities/block";
import { fallbackRender } from "@/shared/utils/fallbackRender";
import { AccountFilters } from "@/widgets/account";
import { ProfileManagerWidget } from "@/widgets/profile";

import { Layout, ManagerWrapper } from "./AccountLayout.styled";

export function AccountListLayout({ children, title, filters, isCounterparties }: AccountListLayout) {
  const { data: profile } = useGetProfileQuery();

  return (
    <div>
      <Helmet>{title}</Helmet>

      <AccountFilters
        isCounterparties={isCounterparties}
        search={filters?.search}
        roles={filters?.roles}
        searchPlaceholder={filters?.searchPlaceholder}>
        {filters?.children}
      </AccountFilters>
      <Layout manager={profile?.manager} isCounterparties={isCounterparties}>
        <ErrorBoundary fallbackRender={fallbackRender}>{children}</ErrorBoundary>
        {profile?.manager && (
          <ManagerWrapper isCounterparties={isCounterparties}>
            <BlockCardEntity>
              <ProfileManagerWidget manager={profile.manager} />
            </BlockCardEntity>
          </ManagerWrapper>
        )}
      </Layout>
    </div>
  );
}
