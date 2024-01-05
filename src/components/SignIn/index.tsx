import { useState } from "react";
import Input from "../Input";
import * as S from "./styled";
import useAppContext from "../../hooks/useAppContext";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const { signIn } = useAppContext();
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const sendSignIn = async () => {
    try {
      const result = await signIn(email, password);
      result && navigate("/");
    } catch (err: any) {
      console.log(err.request.response);
    }
  };
  return (
    <S.Form>
      <h2>Bem-vindo</h2>
      <p>Acessa nossa plataforma e organize seus arquivos como desejar!</p>
      <Input
        placeholder="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <Input
        placeholder="Senha"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <S.ContainerForgotPass>
        <S.ForgotPassword href="#">Esqueceu sua senha ?</S.ForgotPassword>
      </S.ContainerForgotPass>

      <S.Button type="button" onClick={() => sendSignIn()}>
        Entrar
      </S.Button>

      <S.SignUp>
        Não tem conta? <p>cadastre-se Aqui</p>
      </S.SignUp>
    </S.Form>
  );
};

export default SignIn;
