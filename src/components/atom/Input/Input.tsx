import React, { ForwardedRef } from "react";
import "./Input.scss";

interface InputProps {
  label: string;
  defaultValue?: string;
}

const Input = (
  { label, defaultValue = "" }: InputProps,
  ref: ForwardedRef<HTMLInputElement>
) => {
  return (
    <div className="input-wrapper">
      <div className="label">{label}</div>
      <input
        role="input"
        ref={ref}
        type="text"
        className="input-field"
        defaultValue={defaultValue}
      />
    </div>
  );
};

export default React.forwardRef<HTMLInputElement, InputProps>(Input);
