import "./App.css";
import { EditScreen, Streams } from "./components/page";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect } from "react";
import { retrieveStreams } from "./redux/actions/stream";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(retrieveStreams());
    console.log("stream fetch");
  }, [dispatch]);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/edit/:id">
            <EditScreen title={"Edit stream"} />
          </Route>
          <Route path="/edit">
            <EditScreen title={"Create a stream"} />
          </Route>
          <Route path="/">
            <Streams />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
