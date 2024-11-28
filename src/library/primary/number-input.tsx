import { PrimaryInputProperties } from "..";
import { BaseInput } from "../base/base-input";
import IUseInput from "../interfaces/i-use-input";

export const NumberInput: React.FC<NumberInputProperties> = ({
  id,
  inputStyle,
  placeholder,
  required,
  useInput,
}) => {
  return (
    <BaseInput
      id={id}
      inputStyle={inputStyle}
      placeholder={placeholder}
      required={required}
      type="number"
      useInput={useInput}
    />
  );
};

interface NumberInputProperties extends PrimaryInputProperties {
  useInput: IUseInput<number, string>;
}
