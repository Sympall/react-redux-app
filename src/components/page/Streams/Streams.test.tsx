import Streams from "./Streams";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {
  renderWithRouter as render,
  store,
} from "../../../shared/utils/test-utils";
import { Switch, Route } from "react-router";
// jest.mock("../../../redux/store", () => ({
//   ...jest.requireActual("../../../redux/store"),
//   useStreamData: jest.fn().mockReturnValue([]),
// }));

describe("Stream page", () => {
  const renderWithSwitch = (comp: any) =>
    render(
      <Switch>
        <Route path="/edit/:id" component={() => <div>test edit</div>} />
        <Route path="/">{comp}</Route>
      </Switch>
    );
  it("render list", () => {
    const List = renderWithSwitch(<Streams />);
    // List.debug();
    expect(screen.getByTestId("stream-list")).toBeTruthy();
  });

  it("Edit list", async () => {
    renderWithSwitch(<Streams />);
    const editbtn = screen.getByRole("button", { name: /edit/i });
    // const editbtn = screen.getAllByRole("button");
    userEvent.click(editbtn);
    await screen.findByText(/test edit/i);
    // screen.debug();
  });

  it("Delete list", () => {
    renderWithSwitch(<Streams />);
    const delbtn = screen.getByRole("button", { name: /delete/i });
    // screen.debug();
    userEvent.click(delbtn);
    expect(store.dispatch).toHaveBeenCalled();
  });
});
