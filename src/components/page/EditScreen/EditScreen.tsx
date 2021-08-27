import { memo, useRef } from "react";
import { Button, Input } from "../../atom";
import "./EditScreen.scss";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addStream, editStream } from "../../../redux/actions/stream";
import { useStreamData } from "../../../redux/store";

interface IEditScreenProps {
  title: string;
}
export interface EditParams {
  id: string;
}
const EditScreen = ({ title }: IEditScreenProps) => {
  const titleInputRef = useRef<HTMLInputElement>(null);
  const descInputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const Streams = useStreamData();
  const { id } = useParams<EditParams>();
  const defaultData = Streams.find((item) => item.id === id);

  const handleSubmit = () => {
    const title = titleInputRef.current?.value ?? "";
    const desc = descInputRef.current?.value ?? "";
    dispatch(
      defaultData
        ? editStream(defaultData?.id, title, desc)
        : addStream(title, desc)
    );
  };

  return (
    <div className="edit-screen-wrapper">
      <div className="screen-title">{title}</div>
      <Input
        ref={titleInputRef}
        label="Enter title"
        defaultValue={defaultData?.title}
      />
      <Input
        ref={descInputRef}
        label="Enter description"
        defaultValue={defaultData?.description}
      />
      <Link to="/">
        <Button label="Submit" onClick={handleSubmit} />
      </Link>
    </div>
  );
};

export default memo(EditScreen);
