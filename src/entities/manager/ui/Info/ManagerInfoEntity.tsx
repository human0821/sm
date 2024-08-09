import { InfoAvatar, InfoBlock, InfoPosition, InfoTitle, InfoWrapper } from "./ManagerInfoEntity.styled";

export function ManagerInfoEntity({ manager }: { manager: StoreUser.Manager }) {
  return (
    <InfoWrapper>
      <InfoAvatar src={manager.avatar} />
      <InfoBlock>
        <InfoTitle variant="h3">{manager.fullName}</InfoTitle>
        {/* {manager.position && <InfoPosition>{manager.position}</InfoPosition>} */}
        <InfoPosition>Менеджер компании &quot;Созвездие мебели&quot;</InfoPosition>
      </InfoBlock>
    </InfoWrapper>
  );
}
