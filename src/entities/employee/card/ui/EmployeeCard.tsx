import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { useChangePropsEmployeeMutation } from "@/app/api/employees/api";
import Routes from "@/app/routes/consts/routes";
import { EditIcon } from "@/assets/icons";
import { BlockCardEntity } from "@/entities/block";
import { UserInfoCard } from "@/entities/user";
import { ActivationButton } from "@/features/account";

import { CardWrapper, ButtonsWrapper, ActivationButtonBottomWrapper } from "./EmployeeCard.styled";

export const EmployeeCard = ({ data: { deleted, ...user }, isEdit }: EmployeeCard) => {
  const navigate = useNavigate();

  const activationButton = (
    <ActivationButton
      isActive={!deleted}
      mutationHook={useChangePropsEmployeeMutation}
      name="сотрудник"
      id={user.id}
      activateBodyField="deleted"
    />
  );

  return (
    <BlockCardEntity>
      <CardWrapper>
        <UserInfoCard {...user} />
        <ButtonsWrapper>
          {isEdit && (
            <Button
              startIcon={<EditIcon style={{ width: 24, height: 24, marginRight: 2 }} />}
              sx={{ padding: "5px 20px" }}
              size="medium"
              onClick={() => {
                navigate(`${Routes.ACCOUNT_EMPLOYEES_PAGE}/${user.id}`);
              }}>
              <span>Редактировать</span>
            </Button>
          )}
          {activationButton}
        </ButtonsWrapper>
      </CardWrapper>
      <ActivationButtonBottomWrapper>{activationButton}</ActivationButtonBottomWrapper>
    </BlockCardEntity>
  );
};
