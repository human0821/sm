import { createContext } from "react";

export const RoleContext = createContext<FoundRoles | null>(null);

export function checkRole({
  roles,
  controlRoles,
}: {
  roles: StoreUser.UserRole[];
  controlRoles: number | number[];
}): boolean {
  if (Array.isArray(controlRoles)) {
    return controlRoles.some((role) => checkRole({ roles, controlRoles: role }));
  }
  return roles.some((role) => role.id === controlRoles);
}
