type typesInput = "text" | "number" | "password" | "email" | "text";

export interface IPropsInput {
  placeholder?: string;
  value?: string;
  onChangeText?: (
    text: string
  ) => void | React.Dispatch<React.SetStateAction<string>>;
  type?: typesInput;
  disabled?: boolean;
}
