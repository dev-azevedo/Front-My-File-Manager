type typesInput = "text" | "number" | "password" | "email" | "text";

export interface IPropsInput {
  placeholder?: string;
  value?: string;
  onChange?: (
    text: React.ChangeEvent<HTMLInputElement>
  ) => void | React.Dispatch<React.SetStateAction<string>>;
  type?: typesInput;
  disabled?: boolean;
}
