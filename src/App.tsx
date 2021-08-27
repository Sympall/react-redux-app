import "./App.css";
import { EditScreen, Streams } from "./components/page";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
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
