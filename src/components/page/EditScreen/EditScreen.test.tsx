import EditScreen from "./EditScreen";
import { mockStoreData, render, store } from "../../../shared/utils/test-utils";
import reactRouter, { Route, Router, Switch } from "react-router";
import { screen } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";
import { createMemoryHistory } from "history";

// jest.mock("react-router", () => ({
//   ...jest.requireActual("react-router"),
//   useParams: jest.fn().mockReturnValue({ id: 1 }),
// }));

describe("Edit screen", () => {
  let useParamsMock: jest.SpyInstance | null = null;
  store.dispatch = jest.fn();
  beforeEach(() => {
    (store.dispatch as jest.Mock<any, any>).mockClear();
    useParamsMock = jest.spyOn(reactRouter, "useParams");
    const history = createMemoryHistory();
    history.push("/edit/1");
    render(
      <Router history={history}>
        <Switch>
          <Route path="/edit/:id">
            <EditScreen title="Edit screen" />
          </Route>
          <Route path="/edit">
            <EditScreen title="Edit screen" />
          </Route>
          <Route path="/">
            <div>success submit</div>
          </Route>
        </Switch>
      </Router>
    );
  });
  afterEach(() => {
    useParamsMock?.mockClear();
  });
  it("with default value", async () => {
    useParamsMock?.mockReturnValue({ id: 1 });
    const inputs = (await screen.findAllByRole("input")) as HTMLInputElement[];
    const testData = mockStoreData.find((item) => item.id === 1);
    // screen.debug();
    expect(testData).toBeTruthy();
    expect(inputs[0].value).toBe(testData?.title);
    expect(inputs[1].value).toBe(testData?.description);
  });

  it("On user input and submit", async () => {
    useParamsMock?.mockReturnValue({ id: 1 });
    const inputs = (await screen.findAllByRole("input")) as HTMLInputElement[];
    userEvent.type(inputs[0], "title");
    userEvent.type(inputs[1], "desc");
    const submit = await screen.findByText(/submit/i);
    userEvent.click(submit);
    expect(store.dispatch).toHaveBeenCalled();
    await screen.findByText(/success submit/i);
  });
});
