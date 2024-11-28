import IValid from "./i-valid";

export default interface IUseInput<T> extends IValid {
  dirty: boolean;
  error: string;
  value: T;
  handleUpdate: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
