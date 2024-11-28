import IValid from "./i-valid";

export default interface IUseInput<T, K> extends IValid {
  dirty: boolean;
  error: string;
  id: string;
  reference: React.RefObject<HTMLInputElement>;
  value: T;
  handleUpdate: (value: K, valid: boolean, validationMessage: string) => void;
}
