import { Provider } from "react-redux";
import { render as RTL } from "@testing-library/react";
import configMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { Router, Switch, Route } from "react-router-dom";
import { createMemoryHistory } from "history";

const middlewares = [thunk];
const mockStore = configMockStore(middlewares);
const store = mockStore({ stream: [{ id: 1, desc: "desc", title: "tt" }] });
store.dispatch = jest.fn();

export const render = (comp: any) => {
  const history = createMemoryHistory();
  return RTL(
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route path="/edit/:id" component={() => <div>test edit</div>} />
          <Route path="/">{comp}</Route>
        </Switch>
        {/* {comp} */}
      </Router>
    </Provider>
  );
};
