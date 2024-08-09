import { useRef } from "react";

import { MediaUploader } from "@/shared/ui/MediaUploader";

import { InfoAvatarUploader, InfoList, InfoListItem, InfoName, InfoWrapper } from "./ProfileInfoWidget.styled";
import { useChangeAvatar } from "../../hooks/useChangeAvatar";
import { useProfileInfo } from "../../hooks/useProfileInfo";

export function ProfileInfoWidget({ user }: { user?: StoreUser.Profile }) {
  const userAvatar = useRef(user?.avatar || "");
  const { handleUploadAvatar } = useChangeAvatar();
  const userInfo = useProfileInfo({ user });

  return (
    <InfoWrapper>
      <InfoAvatarUploader>
        <MediaUploader initialImage={userAvatar.current} onChange={handleUploadAvatar} />
      </InfoAvatarUploader>
      <InfoName variant="h3">{user?.fullName || user?.companyName}</InfoName>
      <InfoList>
        {userInfo.map((info, index) => (
          <InfoListItem key={index}>
            {info.icon}
            <span>{info.text}</span>
          </InfoListItem>
        ))}
      </InfoList>
    </InfoWrapper>
  );
}
