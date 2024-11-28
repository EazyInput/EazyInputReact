import { useId } from "react";
import {
  BaseField,
  DateInput,
  NumberInput,
  TextInput,
  useDateInput,
  useNumberInput,
  useTextInput,
} from "../library";

export const App: React.FC = () => {
  const name = useTextInput();
  const age = useNumberInput();
  const start = useDateInput();

  return (
    <form>
      <fieldset>
        <legend>Information:</legend>
        <BaseField label="name" htmlFor={useId()}>
          <TextInput useInput={name} />
        </BaseField>
        <div>
          <NumberInput useInput={age} />
        </div>
        <div>
          <DateInput useInput={start} />
        </div>
      </fieldset>
    </form>
  );
};
