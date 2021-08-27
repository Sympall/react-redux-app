import React, { useCallback } from "react";
import { IObjData } from "../../../shared/Types";
import { Button } from "../../atom";
import { Card } from "../../organism";
import "./Streams.scss";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteStream } from "../../../redux/actions/stream";
import { useStreamData } from "../../../redux/store";

const Streams = () => {
  const StreamList = useStreamData();
  const dispatch = useDispatch();
  const history = useHistory();

  const handleEdit = useCallback(
    (obj: IObjData) => {
      console.log(obj);
      history.push(`/edit/${obj.id}`);
    },
    [history]
  );

  const handleDelete = useCallback(
    (id: string) => {
      dispatch(deleteStream(id));
    },
    [dispatch]
  );

  return (
    <div className="streams-wrapper">
      <div className="screen-label">Streams</div>
      <div className="stream-list">
        {StreamList.map((item) => (
          <Card
            key={item.id}
            desc={item.description}
            title={item.title}
            onEditClick={() => handleEdit(item)}
            onDeleteClick={() => handleDelete(item.id)}
          />
        ))}
      </div>
      <Link to="/edit">
        <Button label="Create Stream" />
      </Link>
    </div>
  );
};

export default React.memo(Streams);
