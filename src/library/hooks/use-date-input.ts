import IUseInput from "../interfaces/i-use-input";
import useInput from "./use-input";

export default function useDateInput(
  initialValue = new Date(),
): IUseInput<Date> {
  return useInput<Date>(
    initialValue,
    (updated) => updated.valueAsDate ?? new Date(),
  );
}
