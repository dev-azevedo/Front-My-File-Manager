import styled from "styled-components";
import colors from "../../Utils/colors";

export const Form = styled.form`
  width: 75%;
  padding: 30px !important;
  background-color: ${colors.white};
  border-radius: 5px;

  h2 {
    font-size: 30px;
    text-align: center;
    margin-bottom: 5px !important;
    margin-top: 30px !important;
    color: ${colors.primary};
  }

  p {
    font-size: 18px;
    color: ${colors.tertiary};
    text-align: center;
    margin-bottom: 30px !important;
  }
`;

export const ContainerForgotPass = styled.div`
  width: 100%;
  height: 40px;
`;

export const ForgotPassword = styled.a`
  color: ${colors.secondary};
  text-decoration: none !important;
`;

export const Button = styled.button`
  width: 100%;
  border-radius: 5px;
  height: 30px;
  font-size: 18px;
  outline: 0;
  text-align: center;
  margin-bottom: 10px !important;
  background-color: ${colors.secondary};
  border: 0;
  color: ${colors.white};

  :hover {
    opacity: 0.4;
    transform: scale(0.9);
    transition: all 0.3s ease !important;
  }
`;

export const SignUp = styled.button`
  margin: 20px auto 0 auto !important;
  border: 0;
  font-size: 18px;
  display: flex;
  gap: 5px;

  p {
    color: ${colors.primary};
    font-weight: bold;
  }

  :hover {
    opacity: 0.4;
    transform: scale(0.95);
    transition: all 0.6s ease !important;
  }
`;
