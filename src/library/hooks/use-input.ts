import { useState } from "react";
import IUseInput from "../interfaces/i-use-input";

export default function useInput<T>(
  initialValue: T,
  mappingFunction: (event: HTMLInputElement) => T,
): IUseInput<T> {
  const [value, setValue] = useState<T>(initialValue);
  const [valid, setValid] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [dirty, setDirty] = useState<boolean>(false);

  const handleUpdate = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const element = event.target;

    setDirty(true);
    setValue(mappingFunction(element));
    setValid(element.validity.valid);
    setError(element.validationMessage);
  };

  return { dirty, error, value, valid, handleUpdate };
}
