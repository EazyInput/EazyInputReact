import IUseInput from "../interfaces/i-use-input";
import useInput from "./use-input";

export default function useDateInput(
  initialValue = new Date(),
): IUseInput<Date> {
  return useInput<Date>(initialValue, (updated) => {
    const parts = updated.value.split("-");

    // A normal parse will produce UTC, resulting in a off by one day error.
    // new Date(year, month [, day [, hours[, minutes[, seconds[, ms]]]]])
    return new Date(
      Number.parseInt(parts[0]),
      Number.parseInt(parts[1]) - 1,
      Number.parseInt(parts[2]),
    ); // Note: months are 0-based
  });
}
