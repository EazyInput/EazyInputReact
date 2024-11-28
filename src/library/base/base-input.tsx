import IUseInput from "../interfaces/i-use-input";
import { InputType } from "../types/input-type";

export const BaseInput: React.FC<BaseInputProperties> = ({
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
      onFocus={useInput.handleUpdate}
      onInput={useInput.handleUpdate}
      type={type}
      value={determineValue()}
    />
  );
};

interface BaseInputProperties {
  type: string;
  useInput: IUseInput<InputType>;
}
