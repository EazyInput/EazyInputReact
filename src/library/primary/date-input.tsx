import { BaseInput } from "../base/base-input";
import IUseInput from "../interfaces/i-use-input";
import PrimaryInputProperties from "../types/primary-input-properties";

export const DateInput: React.FC<DateInputProperties> = ({
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
      type="date"
      useInput={useInput}
    />
  );
};

interface DateInputProperties extends PrimaryInputProperties {
  useInput: IUseInput<Date, string>;
}
