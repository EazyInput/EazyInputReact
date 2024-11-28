import IUseInput from "../interfaces/i-use-input";
import useInput from "./use-input";

export default function useCheckbox(
  initialValue = false,
): IUseInput<boolean, boolean> {
  return useInput<boolean, boolean>(initialValue, (updated) => updated);
}
