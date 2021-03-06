import "./Card.scss";
import { Button } from "../../atom";

export interface CardProps {
  title: string;
  desc: string;
  onEditClick?: () => void;
  onDeleteClick?: () => void;
}

const Card = ({ desc, onDeleteClick, onEditClick, title }: CardProps) => {
  return (
    <div className="card-wrapper">
      <div className="info-wrapper">
        <div className="icon"></div>
        <div className="info">
          <div className="card-title">{title}</div>
          <div className="card-desc">{desc}</div>
        </div>
      </div>
      <div className="btns-wrapper">
        <Button label="Edit" onClick={onEditClick} />
        <Button label="Delete" isSecondary onClick={onDeleteClick} />
      </div>
    </div>
  );
};

export default Card;
