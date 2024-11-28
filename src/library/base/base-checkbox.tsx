import IUseInput from "../interfaces/i-use-input";

export const BaseCheckBox: React.FC<BaseCheckBoxProperties> = ({
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
    <input type="checkbox" checked={useInput.value} onChange={handleUpdate} />
  );
};

interface BaseCheckBoxProperties {
  useInput: IUseInput<boolean, boolean>;
}
