import React from "react";
import { BaseInput } from "../base/base-input";
import IUseInput from "../interfaces/i-use-input";
import PrimaryInputProperties from "../types/primary-input-properties";

export const TextInput: React.FC<TextInputProperties> = ({
  id,
  inputStyle,
  placeholder,
  required,
  useInput,
}) => {
  return (
    <BaseInput
      id={id}
      inputStyle={inputStyle}
      placeholder={placeholder}
      required={required}
      type="text"
      useInput={useInput}
    />
  );
};

interface TextInputProperties extends PrimaryInputProperties {
  useInput: IUseInput<string, string>;
}
