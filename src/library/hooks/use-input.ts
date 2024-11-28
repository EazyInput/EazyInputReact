import { useState } from "react";
import IUseInput from "../interfaces/i-use-input";

export default function useInput<T>(
  initialValue: T,
  mappingFunction: (value: string) => T,
): IUseInput<T> {
  const [value, setValue] = useState<T>(initialValue);
  const [valid, setValid] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [dirty, setDirty] = useState<boolean>(false);

  const handleUpdate = (
    value: string,
    valid: boolean,
    validationMessage: string,
  ): void => {
    setDirty(true);
    setValue(mappingFunction(value));
    setValid(valid);
    setError(validationMessage);
  };

  return { dirty, error, value, valid, handleUpdate };
}
