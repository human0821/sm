import type { RootState } from "@/app/store";

import { IconButton } from "@mui/material";
import { AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

import { CloseIcon } from "@/assets/icons";
import { useLayoutMenuState } from "@/features/layout/menu";
import { CONTENT_ROLE_DEFAULT } from "@/shared/consts/content";
import { motionFade } from "@/shared/consts/motion";
import { useClickOutside } from "@/shared/hooks/useClickOutside";
import { Avatar } from "@/shared/ui/Avatar/Avatar";

import {
  ProfileAdminHeaderProfile,
  ProfileAdminHeaderContainer,
  ProfileAdminHeaderDropdown,
  ProfileAdminHeaderOption,
  ProfileAdminHeaderWrapper,
  ProfileAdminHeaderOptionTitle,
  ProfileAdminHeaderOptionDescription,
  ProfileAdminHeaderBackdrop
} from "./ProfileAdminHeaderEntity.styled";

export function ProfileAdminHeaderEntity(props: { actionsList: ProfileEntity.LayoutHeaderAction[] }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const { toggleLayoutMenu, showLayoutMenu } = useLayoutMenuState();

  const user = useSelector((state: RootState) => state.user.user);

  const wrapper = useRef<HTMLDivElement>(null);

  const closeDropdown = () => {
    setShowDropdown(false);
  };

  const toggleShow = () => {
    setShowDropdown(!showDropdown);
    /*
    if (showLayoutMenu) {
      toggleLayoutMenu();
    }*/
  };

  const handleActionClick = (action?: ProfileEntity.LayoutHeaderAction) => {
    closeDropdown();
    action?.onClick();
  };

  useClickOutside({ wrapper, onClose: closeDropdown, isShow: showDropdown });

  useEffect(() => {
    if (!showLayoutMenu) {
      document.body.id = showDropdown ? "menu-opened" : "";
    }
  }, [showDropdown]);

  return (
    <>
      <ProfileAdminHeaderContainer>
        <ProfileAdminHeaderWrapper ref={wrapper} active={Number(showDropdown)}>
          <ProfileAdminHeaderProfile role="button" tabIndex={0} active={Number(showDropdown)} onClick={toggleShow}>
            <Avatar src={user?.avatar} stub="/images/profile/avatar2.svg" variant="admin-header" rounded={7} />
            <span>{user?.fullName || user?.shortenedName || user?.roles[0]?.name || CONTENT_ROLE_DEFAULT}</span>
            {showDropdown && (
              <IconButton color="primary" onClick={closeDropdown}>
                <CloseIcon />
              </IconButton>
            )}
          </ProfileAdminHeaderProfile>
          <ProfileAdminHeaderDropdown active={Number(showDropdown)}>
            {props.actionsList.map((action) => (
              <ProfileAdminHeaderOption key={action.title} onClick={() => handleActionClick(action)}>
                {action.icon}
                <ProfileAdminHeaderOptionTitle>{action.title}</ProfileAdminHeaderOptionTitle>
                <ProfileAdminHeaderOptionDescription>{action.description}</ProfileAdminHeaderOptionDescription>
              </ProfileAdminHeaderOption>
            ))}
          </ProfileAdminHeaderDropdown>
        </ProfileAdminHeaderWrapper>
      </ProfileAdminHeaderContainer>
      <AnimatePresence>
        {showDropdown && <ProfileAdminHeaderBackdrop {...motionFade} />}
      </AnimatePresence>
    </>
  );
}
