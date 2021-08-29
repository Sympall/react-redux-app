import "./Button.scss";

export interface ButtonProps {
  label: string;
  onClick?: () => void;
  isSecondary?: boolean;
}

const Button = ({ label, onClick, isSecondary = false }: ButtonProps) => {
  return (
    <button
      className={`btn-wrapper ${isSecondary ? "btn-secondary" : ""}`}
      onClick={onClick}
      data-testid="button-component"
    >
      {label}
    </button>
  );
};

export default Button;
