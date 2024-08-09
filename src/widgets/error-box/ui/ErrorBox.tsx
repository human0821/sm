import { useErrorBoundary } from "react-error-boundary";
import { useNavigate } from "react-router-dom";

import Routes from "@/app/routes/consts/routes";

import { ErrorWrapper, Code, Descwrapper, Title, Desc, Buttons, Back, Main } from "./ErrorBox.styled";
import { BACK, MAIN, Error, RESET } from "../consts";

export const ErrorBox: React.FC<ErrorBox> = ({ code, title, desc, reset }) => {
  const navigate = useNavigate();
  const { resetBoundary } = useErrorBoundary();

  const back = () => {
    navigate(-1);
    resetBoundary();
  };

  const main = () => {
    navigate(Routes.DASHBOARD_PAGE);
    resetBoundary();
  };

  const resetHandle = () => {
    navigate(0);
  };

  return (
    <ErrorWrapper>
      <Code>{code in Error ? code : 404}</Code>
      <Descwrapper>
        <Title>{title || (Error[code as keyof typeof Error] || Error[404]).title}</Title>
        <Desc>{desc || (Error[code as keyof typeof Error] || Error[404]).desc}</Desc>
      </Descwrapper>
      <Buttons>
        <Back variant="outlined" onClick={back}>
          {BACK}
        </Back>
        <Main variant="contained" onClick={reset ? resetHandle : main}>
          {reset ? RESET : MAIN}
        </Main>
      </Buttons>
    </ErrorWrapper>
  );
};
