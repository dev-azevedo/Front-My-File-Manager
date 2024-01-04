import styled from "styled-components";
import colors from "../../Utils/colors";

export const ContainerLogin = styled.section`
  display: flex;
  width: 100%;
  height: 100vh;
`;

export const CardLeft = styled.div`
  display: flex;
  width: 60%;
  background-color: ${colors.primary};
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 0 20% 100% 0;

  h1 {
    color: ${colors.white};
    font-size: 40px;
  }

  p {
    color: ${colors.tertiary};
    font-size: 30px;
  }
`;

export const CardRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 40%;
`;
