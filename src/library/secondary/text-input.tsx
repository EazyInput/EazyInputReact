import React from "react";
import { BaseInput } from "../base/base-input";
import IUseInput from "../interfaces/i-use-input";

export const TextInput: React.FC<TextInputProperties> = ({ useInput }) => {
  return <BaseInput type="text" useInput={useInput} />;
};

interface TextInputProperties {
  useInput: IUseInput<string>;
}
