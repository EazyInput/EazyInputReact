import {
  BaseField,
  DateInput,
  NumberInput,
  TextInput,
  useDateInput,
  useNumberInput,
  useTextInput,
} from "../library";
import { BaseCheckBox } from "../library/base/base-checkbox";
import useCheckbox from "../library/hooks/use-checkbox";

export const App: React.FC = () => {
  const name = useTextInput();
  const age = useNumberInput();
  const start = useDateInput();
  const terms = useCheckbox();

  return (
    <form>
      <fieldset>
        <legend>Information:</legend>
        <BaseField label="name" htmlFor={name.id}>
          <TextInput useInput={name} />
        </BaseField>
        <BaseField label="age" htmlFor={age.id}>
          <NumberInput useInput={age} />
        </BaseField>
        <BaseField label="date" htmlFor={start.id}>
          <DateInput useInput={start} />
        </BaseField>
        <BaseField label="terms" htmlFor={terms.id}>
          <BaseCheckBox useInput={terms} />
        </BaseField>
      </fieldset>
    </form>
  );
};
