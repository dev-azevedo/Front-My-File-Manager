import { ReactNode } from "react";
import * as S from "./styled";

interface IPropsButton {
  children: ReactNode;
  onClick: any;
  bgColor: string;
  textColor: string;
  disabled: boolean;
}

const Button = (props: IPropsButton) => {
  return (
    <S.Button
      onClick={() => props.onClick()}
      disabledStyle={props.disabled}
      background={props.bgColor}
      disabled={props.disabled}
      color={props.textColor}
    >
      <h4>{props.children}</h4>
    </S.Button>
  );
};

export default Button;
