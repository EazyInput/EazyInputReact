import IUseInput from "../interfaces/i-use-input";
import { InputType } from "../types/input-type";

export const BaseInput: React.FC<BaseInputProperties> = ({
  type,
  useInput,
}) => {
  const determineValue = (): string => {
    return useInput.value.toString();
  };

  return (
    <input
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
