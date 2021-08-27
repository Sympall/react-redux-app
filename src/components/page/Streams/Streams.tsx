import React, { useEffect, useState } from "react";
import { IObjData } from "../../../shared/Types";
import { Button } from "../../atom";
import { Card } from "../../organism";
import "./Streams.scss";

const Streams = () => {
  const [StreamList, setStreamList] = useState<IObjData[]>([]);

  useEffect(() => {
    fetch("http://localhost:3005/streams")
      .then((res) => res.json())
      .then((data: IObjData[]) => {
        setStreamList(data);
      });
  }, []);

  return (
    <div className="streams-wrapper">
      <div className="screen-label">Streams</div>
      <div className="stream-list">
        {StreamList.map((item) => (
          <Card desc={item.description} title={item.title} />
        ))}
      </div>
      <Button label="Create Stream" />
    </div>
  );
};

export default React.memo(Streams);
