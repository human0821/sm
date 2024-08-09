import { CONTENT_ROLE_DEFAULT } from "@/shared/consts/content";
import { Avatar } from "@/shared/ui/Avatar/Avatar";

import {
  AuthProfileCardEmail,
  AuthProfileCardInfo,
  AuthProfileCardTitle,
  AuthProfileCardWrapper,
} from "./AuthProfileCard.styled";

export function AuthProfileCard({ profile }: { profile: StoreUser.User }) {
  const roleName = profile.roles.length ? profile.roles[0]?.name : CONTENT_ROLE_DEFAULT;

  return (
    <AuthProfileCardWrapper>
      <Avatar src={profile.avatar} size={40} />
      <AuthProfileCardInfo>
        {roleName && (
          <AuthProfileCardTitle variant="subtitle1">
            {roleName} {profile.fullName || profile.shortenedName}
          </AuthProfileCardTitle>
        )}
        <AuthProfileCardEmail variant="subtitle2">{profile.email}</AuthProfileCardEmail>
      </AuthProfileCardInfo>
    </AuthProfileCardWrapper>
  );
}
