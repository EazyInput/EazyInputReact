import { useEffect } from "react";
import {
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

  useEffect(() => {
    console.log(start.value);
  }, [start.value]);

  return (
    <form>
      <fieldset>
        <legend>Information:</legend>
        <div>
          <TextInput useInput={name} />
        </div>
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
