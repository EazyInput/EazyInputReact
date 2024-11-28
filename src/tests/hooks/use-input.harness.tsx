import { useInput } from "../../library";

export const UseInputHarness: React.FC = () => {
  const input = useInput<string>("", (x) => x.value);

  return (
    <label>
      input
      <input value={input.value} onInput={input.handleUpdate} type="text" />
    </label>
  );
};
