import { useEffect, useState } from "react";

import { useChangeActiveCounterpartyMutation } from "@/app/api/counterparties/api";
import Routes from "@/app/routes/consts/routes";
import { BlockCardEntity } from "@/entities/block";
import { ActivationButton } from "@/features/account";

import {
  CardWrapper,
  CardContent,
  ButtonsWrapper,
  CounterpartyTitle,
  CounterpartyDescription,
  CounterpartyInfo,
  CounterpartyLink,
} from "./CounterpartyCard.styled";

export const CounterpartyCard = ({ isActive, id, name, email, forDeactivation }: CounterpartiesApi.CounterpartyItem) => {
  const [currentIsActive, setCurrentIsActive] = useState(isActive);

  useEffect(() => {
    if (isActive !== currentIsActive) {
      setCurrentIsActive(isActive);
    }
  }, [isActive]);

  return (
    <CardWrapper>
      <CounterpartyLink to={`${Routes.ACCOUNT_COUNTERPARTIES_PAGE}/${id}`} />
      <BlockCardEntity className="сounterparty-substrate">
        <CardContent>
          <CounterpartyInfo>
            <CounterpartyTitle active={currentIsActive}>{name}</CounterpartyTitle>
            <CounterpartyDescription>{email}</CounterpartyDescription>
          </CounterpartyInfo>
          <ButtonsWrapper>
            <ActivationButton
              isActive={isActive}
              mutationHook={useChangeActiveCounterpartyMutation}
              name="контрагент"
              id={id}
              setIsActive={setCurrentIsActive}
              forDeactivation={forDeactivation}
            />
          </ButtonsWrapper>
        </CardContent>
      </BlockCardEntity>
    </CardWrapper>
  );
};
