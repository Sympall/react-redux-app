import React from "react";
import "./Button.scss";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  isSecondary?: boolean;
}

const Button = ({ label, onClick, isSecondary = false }: ButtonProps) => {
  return (
    <button
      className={`btn-wrapper ${isSecondary ? "btn-secondary" : ""}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
