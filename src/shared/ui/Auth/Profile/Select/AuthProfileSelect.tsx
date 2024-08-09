import type { FieldError } from "react-hook-form";

import { FormHelperText, Tooltip } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Routes from "@/app/routes/consts/routes";
import LocalStorage from "@/shared/consts/localStorage";

import {
  AuthProfileSelectHeader,
  AuthProfileSelectHeaderChevron,
  AuthProfileSelectHeaderProfile,
  AuthProfileSelectWrapper,
} from "./AuthProfileSelect.styled";
import { AuthProfileCard } from "../Card/AuthProfileCard";
import { AuthProfileSelectDropdown } from "../SelectDropdown/AuthProfileSelectDropdown";

export function AuthProfileSelect({
  profiles,
  onChange,
  error,
}: {
  profiles: StoreUser.User[];
  onChange: (profile: StoreUser.User) => void;
  error?: FieldError;
}) {
  const emailStorage = localStorage.getItem(LocalStorage.LOGIN_EMAIL);
  const initialProfile = profiles.find((profile) => profile.email === emailStorage) || profiles[0];

  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState<StoreUser.User>(initialProfile);
  const navigate = useNavigate();

  const handleSelect = (profile: StoreUser.User) => {
    setSelectedProfile(profile);
    setShowDropdown(false);
    onChange(profile);
  };

  useEffect(() => {
    handleSelect(initialProfile);
  }, [profiles]);

  return (
    <AuthProfileSelectWrapper>
      <AuthProfileSelectHeader type="button" onClick={() => setShowDropdown(!showDropdown)} active={Number(showDropdown)}>
        <AuthProfileSelectHeaderProfile>
          <AuthProfileCard profile={selectedProfile} />
        </AuthProfileSelectHeaderProfile>
        <AuthProfileSelectHeaderChevron />
      </AuthProfileSelectHeader>
      {showDropdown && (
        <AuthProfileSelectDropdown
          profiles={profiles}
          onSelect={(profile) => handleSelect(profile)}
          onAdd={() => navigate(Routes.AUTH_ADD_PROFILE_PAGE)}
          onClose={() => setShowDropdown(false)}
        />
      )}
      {error?.message && (
        <Tooltip title={error.message}>
          <FormHelperText error>{error.message}</FormHelperText>
        </Tooltip>
      )}
    </AuthProfileSelectWrapper>
  );
}
