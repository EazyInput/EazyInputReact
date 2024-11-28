import IUseInput from "../interfaces/i-use-input";
import useInput from "./use-input";

export default function useTextInput(
  initialValue = "",
): IUseInput<string, string> {
  return useInput<string, string>(initialValue, (updated) => updated);
}
