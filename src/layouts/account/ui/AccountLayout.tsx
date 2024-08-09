import { motion } from "framer-motion";
import { useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useLocation, useNavigate, useOutlet } from "react-router-dom";

import { useAppSelector } from "@/app/store";
import { motionFade } from "@/shared/consts/motion";
import { useIsRole } from "@/shared/hooks/useIsRole";
import { Tabs } from "@/shared/ui/Tabs/Tabs";
import { fallbackRender } from "@/shared/utils/fallbackRender";

import { AccountLayoutWrapper, AccountTitle, AccountTabs } from "./AccountLayout.styled";
import { accountNavigate } from "../consts";

export function AccountLayout() {
  const currentOutlet = useOutlet();
  const location = useLocation();
  const navigate = useNavigate();
  const [value, setValue] = useState(location.pathname);
  const roles = useAppSelector((state) => state.user.user?.roles);
  const { isSupervisorSM } = useIsRole(roles || []);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    navigate(newValue);
  };

  const prepareAccountsNavigate = (accountNavigate: any[]) =>
    [...accountNavigate].map((item) => Object.assign({}, item, { disabled: item.disabled && isSupervisorSM }));

  return (
    <AccountLayoutWrapper>
      <AccountTitle variant="h1">Администрирование аккаунта</AccountTitle>
      <AccountTabs>
        <Tabs items={prepareAccountsNavigate(accountNavigate)} currentValue={value} onChange={handleChange} />
      </AccountTabs>
      <motion.div {...motionFade}>
        <ErrorBoundary fallbackRender={fallbackRender}>{currentOutlet}</ErrorBoundary>
      </motion.div>
    </AccountLayoutWrapper>
  );
}
