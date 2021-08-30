import { Provider } from "react-redux";
import { render as RTL } from "@testing-library/react";
import configMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { Router, Switch, Route } from "react-router-dom";
import { createMemoryHistory } from "history";

const middlewares = [thunk];
const mockStore = configMockStore(middlewares);
export const mockStoreData = [
  { id: 1, description: "test-desc", title: "test-title" },
];
export const store = mockStore({
  stream: mockStoreData,
});

store.dispatch = jest.fn();

export const renderWithRouter = (comp: any) => {
  const history = createMemoryHistory();
  return RTL(
    <Provider store={store}>
      <Router history={history}>{comp}</Router>
    </Provider>
  );
};

export const render = (comp: any) => {
  // const history = createMemoryHistory();
  return RTL(<Provider store={store}>{comp}</Provider>);
};
