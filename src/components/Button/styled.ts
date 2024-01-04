import styled from "styled-components";
import colors from "../../Utils/colors";

type ButtonProps = {
  background: string;
  disabledStyle: boolean;
  color: string;
};

export const Button = styled.button<ButtonProps>`
  width: 100%;
  border-radius: 5px;
  height: 30px;
  font-size: 18px;
  outline: 0;
  text-align: center;
  margin-bottom: 10px !important;
  background-color: ${(props) => props.background};
  border: 0;

  h4 {
    color: ${(props) => props.color};
  }

  :hover {
    opacity: 0.4;
    transform: scale(0.9);
    transition: all 0.3s ease !important;
  }
`;
