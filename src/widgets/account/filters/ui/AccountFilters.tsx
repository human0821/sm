import { RoleFilter } from "@/features/account";
import InputSearch from "@/shared/ui/Input/Search/InputSearch";

import { FilterWrapper, LeftBlock } from "./AccountFilters.styled";

export const AccountFilters = ({ search = true, roles, children, searchPlaceholder, isCounterparties }: AccountFilters) => {
  return (
    <FilterWrapper isCounterparties={isCounterparties} withChildren={!!children}>
      <LeftBlock isCounterparties={isCounterparties}>
        {search && <InputSearch placeholder={searchPlaceholder || "Поиск по сотрудникам"} fullWidth />}
        {roles && <RoleFilter />}
      </LeftBlock>
      {children && children}
    </FilterWrapper>
  );
};
