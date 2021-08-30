import Streams from "./Streams";
import { render as RTL, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { Router, Switch, Route } from "react-router-dom";
import { createMemoryHistory } from "history";
import userEvent from "@testing-library/user-event";
import { deleteStream } from "../../../redux/actions/stream";

// jest.mock("../../../redux/store", () => ({
//   ...jest.requireActual("../../../redux/store"),
//   useStreamData: jest.fn().mockReturnValue([]),
// }));

const middlewares = [thunk];
const mockStore = configMockStore(middlewares);
const store = mockStore({ stream: [{ id: 1, desc: "desc", title: "tt" }] });
store.dispatch = jest.fn();

const render = (comp: any) => {
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

describe("Stream page", () => {
  it("render list", () => {
    const List = render(<Streams />);
    // List.debug();
    expect(screen.getByTestId("stream-list")).toBeTruthy();
  });

  it("Edit list", async () => {
    render(<Streams />);
    const editbtn = screen.getByRole("button", { name: /edit/i });
    // const editbtn = screen.getAllByRole("button");
    userEvent.click(editbtn);
    await screen.findByText(/test edit/i);
    // screen.debug();
  });

  it("Delete list", () => {
    render(<Streams />);
    const delbtn = screen.getByRole("button", { name: /delete/i });
    // screen.debug();
    userEvent.click(delbtn);
    expect(store.dispatch).toHaveBeenCalled();
  });
});
