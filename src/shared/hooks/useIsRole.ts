import { useEffect, useState } from "react";

import { EMPLOYER_ROLES, Roles } from "../consts/roles";
import { checkRole } from "../utils/rolesHelpers";

export function useIsRole(roles: StoreUser.UserRole[]): FoundRoles {
  const [isPartner, setIsPartner] = useState(false);
  const [isAdminSM, setIsAdminSM] = useState(false);
  const [isContentManagerSM, setIsContentManagerSM] = useState(false);
  const [isSupervisorSM, setIsSupervisorSM] = useState(false);
  const [isSeniorManagerSM, setIsSeniorManagerSM] = useState(false);
  const [isManagerSM, setIsManagerSM] = useState(false);
  const [isPartnerPurchasingManager, setIsPartnerPurchasingManager] = useState(false);
  const [isPartnerAccountant, setIsPartnerAccountant] = useState(false);
  const [isPartnerAdmin, setIsPartnerAdmin] = useState(false);
  const [isSeller, setIsSeller] = useState(false);
  const [isStorekeeper, setIsStorekeeper] = useState(false);
  const [isEmployer, setIsEmployer] = useState(false);

  useEffect(() => {
    setIsPartner(false);
    setIsAdminSM(false);
    setIsContentManagerSM(false);
    setIsSupervisorSM(false);
    setIsSeniorManagerSM(false);
    setIsManagerSM(false);
    setIsPartnerPurchasingManager(false);
    setIsPartnerAccountant(false);
    setIsPartnerAdmin(false);
    setIsSeller(false);
    setIsStorekeeper(false);
    setIsEmployer(false);

    roles.forEach((role) => {
      switch (role.id) {
        case Roles.PARTNER:
          setIsPartner(true);
          break;
        case Roles.ADMIN_SM:
          setIsAdminSM(true);
          break;
        case Roles.CONTENT_MANAGER_SM:
          setIsContentManagerSM(true);
          break;
        case Roles.SUPERVISOR_SM:
          setIsSupervisorSM(true);
          break;
        case Roles.SENIOR_MANAGER_SM:
          setIsSeniorManagerSM(true);
          break;
        case Roles.MANAGER_SM:
          setIsManagerSM(true);
          break;
        case Roles.PARTNER_PURCHASING_MANAGER:
          setIsPartnerPurchasingManager(true);
          break;
        case Roles.PARTNER_ACCOUNTANT:
          setIsPartnerAccountant(true);
          break;
        case Roles.PARTNER_ADMIN:
          setIsPartnerAdmin(true);
          break;
        case Roles.SELLER:
          setIsSeller(true);
          break;
        case Roles.STOREKEEPER:
          setIsStorekeeper(true);
          break;
      }
    });

    setIsEmployer(
      checkRole({
        roles,
        controlRoles: EMPLOYER_ROLES,
      }),
    );
  }, [roles]);

  return {
    isPartner,
    isAdminSM,
    isContentManagerSM,
    isSupervisorSM,
    isSeniorManagerSM,
    isManagerSM,
    isPartnerPurchasingManager,
    isPartnerAccountant,
    isPartnerAdmin,
    isSeller,
    isStorekeeper,
    isEmployer,
  };
}
