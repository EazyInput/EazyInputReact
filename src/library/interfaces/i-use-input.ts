import IValid from "./i-valid";

export default interface IUseInput<T> extends IValid {
  dirty: boolean;
  error: string;
  value: T;
  handleUpdate: (
    value: string,
    valid: boolean,
    validationMessage: string,
  ) => void;
}
