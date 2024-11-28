import IUseInput from "../interfaces/i-use-input";
import useInput from "./use-input";

export default function useTextInput(initialValue = ""): IUseInput<string> {
  return useInput<string>(initialValue, (updated) => updated);
}
