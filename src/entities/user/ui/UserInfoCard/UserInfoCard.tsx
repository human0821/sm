import Routes from "@/app/routes/consts/routes";
import { Tag } from "@/shared/ui/Tag/Tag";

import {
  InfoWrapper,
  InfoBlock,
  InfoAvatar,
  InfoLink,
  InfoDescription,
  RolesList,
  RolesListWrapper,
} from "./UserInfoCard.styled";

export const UserInfoCard = ({ fullName, email, avatar, roles, id }: UserInfoCard) => {
  return (
    <InfoWrapper>
      <InfoAvatar src={avatar} size={80} />
      <InfoBlock>
        <InfoLink to={`${Routes.ACCOUNT_EMPLOYEES_PAGE}/${id}`}>{fullName}</InfoLink>
        <InfoDescription>{email}</InfoDescription>
        <RolesListWrapper>
          <RolesList>
            {roles.map(({ name, id }) => (
              <Tag key={id} name={name} size="medium" />
            ))}
          </RolesList>
        </RolesListWrapper>
      </InfoBlock>
    </InfoWrapper>
  );
};
