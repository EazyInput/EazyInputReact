import { CommonInputProperties } from "..";
import IUseInput from "../interfaces/i-use-input";
import { InputType } from "../types/input-type";

export const BaseInput: React.FC<BaseInputProperties> = ({
  id,
  inputStyle,
  placeholder,
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
        // Input Date format only uses yyyy-mm-dd format
        return (useInput.value as Date).toISOString().slice(0, 10);
      }
      default: {
        return useInput.value.toString();
      }
    }
  };

  const handleUpdate = (event: React.ChangeEvent<HTMLInputElement>) => {
    const element = event.target as HTMLInputElement;

    useInput.handleUpdate(
      element.value,
      element.validity.valid,
      element.validationMessage,
    );
  };

  return (
    <input
      className={inputStyle}
      id={id}
      onFocus={handleUpdate}
      onInput={handleUpdate}
      placeholder={placeholder}
      required={required}
      type={type}
      value={determineValue()}
    />
  );
};

interface BaseInputProperties extends CommonInputProperties {
  type: string;
  useInput: IUseInput<InputType, string>;
}
