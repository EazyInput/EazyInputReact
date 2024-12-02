import IUseInput from "../interfaces/i-use-input";
import useInput from "./use-input";

export default function useDateInput(
  initialValue = new Date(),
): IUseInput<Date, string> {
  return useInput<Date, string>(initialValue, (updated) => {
    const parts = updated.split("-");

    const year = Number.parseInt(
      parts.at(0) ?? new Date().getFullYear().toString(),
    );

    const month =
      Number.parseInt(parts.at(1) ?? new Date().getMonth().toString()) - 1;

    const day = Number.parseInt(parts.at(2) ?? new Date().getDay().toString());

    // A normal parse will produce UTC, resulting in a off by one day error.
    // new Date(year, month [, day [, hours[, minutes[, seconds[, ms]]]]])
    return new Date(year, month, day); // Note: months are 0-based
  });
}
