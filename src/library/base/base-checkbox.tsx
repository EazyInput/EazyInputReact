import IUseInput from "../interfaces/i-use-input";
import CommonInputProperties from "../types/common-input-properties";

export const BaseCheckBox: React.FC<BaseCheckBoxProperties> = ({
  inputStyle,
  placeholder,
  required,
  useInput,
}) => {
  const handleUpdate = (event: React.ChangeEvent<HTMLInputElement>) => {
    const element = event.target as HTMLInputElement;

    useInput.handleUpdate(
      element.checked,
      element.validity.valid,
      element.validationMessage,
    );
  };

  return (
    <input
      checked={useInput.value}
      className={inputStyle}
      id={useInput.id}
      onFocus={handleUpdate}
      onChange={handleUpdate}
      placeholder={placeholder}
      ref={useInput.reference}
      required={required}
      type="checkbox"
    />
  );
};

interface BaseCheckBoxProperties extends CommonInputProperties {
  useInput: IUseInput<boolean, boolean>;
}
