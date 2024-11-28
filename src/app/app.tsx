import { BaseInput, useTextInput } from "../library";

export const App: React.FC = () => {
  const input = useTextInput();

  return (
    <div>
      <BaseInput type="text" useInput={input} />
    </div>
  );
};
