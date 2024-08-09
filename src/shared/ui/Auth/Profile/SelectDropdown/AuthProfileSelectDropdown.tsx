import { useRef } from "react";

import { PlusIcon } from "@/assets/icons";
import { useClickOutside } from "@/shared/hooks/useClickOutside";

import {
  AuthProfileSelectDropdownWrapper,
  AuthProfileSelectDropdownOptions,
  AuthProfileSelectDropdownOption,
  AddButton,
} from "./AuthProfileSelectDropdown.styled";
import { AuthProfileCard } from "../Card/AuthProfileCard";

export function AuthProfileSelectDropdown(props: {
  profiles: StoreUser.User[];
  onSelect: (profile: StoreUser.User) => void;
  onAdd: () => void;
  onClose: () => void;
}) {
  const wrapper = useRef<HTMLDivElement>(null);

  useClickOutside({ wrapper, onClose: props.onClose });

  return (
    <AuthProfileSelectDropdownWrapper ref={wrapper}>
      <AuthProfileSelectDropdownOptions>
        {props.profiles.map((profile) => (
          <AuthProfileSelectDropdownOption key={profile.id} type="button" onClick={() => props.onSelect(profile)}>
            <AuthProfileCard profile={profile} />
          </AuthProfileSelectDropdownOption>
        ))}
      </AuthProfileSelectDropdownOptions>
      <AddButton variant="text" startIcon={<PlusIcon />} onClick={props.onAdd}>
        Добавить пользователя
      </AddButton>
    </AuthProfileSelectDropdownWrapper>
  );
}
