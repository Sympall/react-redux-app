import React, { ForwardedRef } from "react";
import "./Input.scss";

interface InputProps {
  label: string;
}

const Input = ({ label }: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
  return (
    <div className="input-wrapper">
      <div className="label">{label}</div>
      <input ref={ref} type="text" className="input-field" />
    </div>
  );
};

export default React.forwardRef<HTMLInputElement, InputProps>(Input);
