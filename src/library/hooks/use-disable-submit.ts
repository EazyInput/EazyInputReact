import IValid from "../interfaces/i-valid";

export default function useDisableSubmit(inputs: Array<IValid>): boolean {
  return inputs.some((input) => !input.valid);
}
