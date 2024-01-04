import SignIn from "../../components/SignIn";
import * as S from "./styled.ts";

const Login = () => {
  return (
    <S.ContainerLogin id="container-login" className="d-flex w-100">
      <S.CardLeft>
        <h1>My Files Manager</h1>
        <p className="fs-4">O lugar certo para organizar seus arquivos.</p>
      </S.CardLeft>

      <S.CardRight>
        <SignIn />
      </S.CardRight>
    </S.ContainerLogin>
  );
};

export default Login;
