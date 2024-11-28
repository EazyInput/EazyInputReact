import IUseInput from "../interfaces/i-use-input";
import useInput from "./use-input";

export default function useNumberInput(initialValue = 0): IUseInput<number> {
  return useInput<number>(initialValue, (updated) => Number.parseInt(updated));
}
