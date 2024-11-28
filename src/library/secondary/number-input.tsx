import { BaseInput } from "../base/base-input";
import IUseInput from "../interfaces/i-use-input";

export const NumberInput: React.FC<NumberInputProperties> = ({ useInput }) => {
  return <BaseInput type="number" useInput={useInput} />;
};

interface NumberInputProperties {
  useInput: IUseInput<number>;
}
