import { ReactNode } from "react";

export const BaseField: React.FC<BaseFieldProperties> = ({
  children,
  htmlFor,
  innerStyle,
  label,
  labelStyle,
  outerStyle,
  validationMessage,
  validationStyle,
}) => {
  return (
    <div className={outerStyle}>
      <label className={labelStyle} htmlFor={htmlFor}>
        {label}
      </label>
      <div className={innerStyle}>{children}</div>
      <p className={validationStyle}>{validationMessage}</p>
    </div>
  );
};

interface BaseFieldProperties {
  children: ReactNode;
  htmlFor: string;
  innerStyle?: string;
  label: string;
  labelStyle?: string;
  outerStyle?: string;
  validationMessage?: string;
  validationStyle?: string;
}
