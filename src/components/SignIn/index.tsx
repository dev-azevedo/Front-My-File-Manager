import colors from "../../Utils/colors";
import Button from "../Button";
import Input from "../Input";
import * as S from "./styled";

const SignIn = () => {
  return (
    <S.Form>
      <h2>Bem-vindo</h2>
      <p>Acessa nossa plataforma e organize seus arquivos como desejar!</p>
      <Input placeholder="Email" type="email" />
      <Input placeholder="Senha" type="password" />
      <S.ForgotPassword href="#">Esqueceu sua senha ?</S.ForgotPassword>

      <Button
        bgColor={colors.secondary}
        textColor={colors.white}
        disabled={false}
        onClick={() => console.log("teste")}
      >
        Entrar
      </Button>

      <S.SignUp>
        Não tem conta? <p>cadastre-se Aqui</p>
      </S.SignUp>
    </S.Form>
  );
};

export default SignIn;
