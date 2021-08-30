import Streams from "./Streams";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { render } from "../../../shared/utils/test-utils";
// jest.mock("../../../redux/store", () => ({
//   ...jest.requireActual("../../../redux/store"),
//   useStreamData: jest.fn().mockReturnValue([]),
// }));

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
