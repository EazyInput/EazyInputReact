import IUseInput from "../interfaces/i-use-input";
import useInput from "./use-input";

export default function useNumberInput(
  initialValue = 0,
): IUseInput<number, string> {
  return useInput<number, string>(initialValue, (updated) =>
    Number.parseInt(updated),
  );
}
