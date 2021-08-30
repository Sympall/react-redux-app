import configMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { addStream, deleteStream, editStream, retrieveStreams } from "./stream";
import { ADD_STREAM, DELETE_STREAM, EDIT_STREAM, INIT_STREAM } from "./type";

jest.mock("../../services/stream-api");

const middlewares = [thunk];
const mockStore = configMockStore(middlewares);
const store = mockStore({});

describe("stream actions", () => {
  it("Reterive stream", async () => {
    const dispatch = jest.fn();
    await retrieveStreams()(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: INIT_STREAM,
      payload: [],
    });
  });

  it("ADD to stream", async () => {
    const dispatch = jest.fn();
    const test = { title: "title", description: "desc", id: 0 };
    await addStream(test.title, test.description)(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: ADD_STREAM,
      payload: test,
    });
  });

  it("EDIT to stream", async () => {
    const dispatch = jest.fn();
    const test = { title: "title", description: "desc", id: 0 };
    await editStream(test.id, test.title, test.description)(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: EDIT_STREAM,
      payload: test,
    });
  });
  it("DELETE to stream", async () => {
    const dispatch = jest.fn();
    const test = { title: "", description: "", id: 0 };
    await deleteStream(test.id)(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: DELETE_STREAM,
      payload: test,
    });
  });
});
