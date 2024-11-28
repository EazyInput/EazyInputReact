import { BaseInput } from "../base/base-input";
import IUseInput from "../interfaces/i-use-input";

export const DateInput: React.FC<DateInputProperties> = ({ useInput }) => {
  return <BaseInput type="date" useInput={useInput} />;
};

interface DateInputProperties {
  useInput: IUseInput<Date>;
}
