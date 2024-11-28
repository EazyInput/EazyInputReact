import IUseInput from "../interfaces/i-use-input";
import { InputType } from "../types/input-type";

export const BaseInput: React.FC<BaseInputProperties> = ({
  inputStyle,
  required,
  type,
  useInput,
}) => {
  const determineValue = (): string | number => {
    switch (type) {
      case "text": {
        return useInput.value.toString();
      }
      case "number": {
        return useInput.value as number;
      }
      case "date": {
        return (useInput.value as Date).toISOString().slice(0, 10);
      }
      default: {
        return useInput.value.toString();
      }
    }
  };

  return (
    <input
      className={inputStyle}
      onFocus={useInput.handleUpdate}
      onInput={useInput.handleUpdate}
      required={required}
      type={type}
      value={determineValue()}
    />
  );
};

interface BaseInputProperties {
  inputStyle?: string;
  required?: boolean;
  type: string;
  useInput: IUseInput<InputType>;
}
