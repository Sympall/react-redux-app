import { ADD_STREAM, DELETE_STREAM, EDIT_STREAM } from "../actions/type";
import streamReducer from "./stream";
const mockStream = [
  {
    id: 1,
    title: "Hello World",
    description: "Greetings Martians",
  },
  {
    title: "New Movie",
    description: "Some Set in Mumbai",
    id: 2,
  },
];
describe("stream reducer", () => {
  let data = mockStream;
  //   beforeEach(() => {
  //     data = [...mockStream];
  //   });
  it("ADD to stream", () => {
    const output = streamReducer(data, {
      payload: { description: "test", id: 3, title: "test" },
      type: ADD_STREAM,
    });
    expect(output.length).toBe(data.length + 1);
  });
  it("EDIT to stream", () => {
    const output = streamReducer(data, {
      payload: { description: "test", id: 1, title: "test" },
      type: EDIT_STREAM,
    });
    expect(output.find((i) => i.id === 1)?.title === "test").toBeTruthy();
  });
  it(" DELETE stream", () => {
    const output = streamReducer(data, {
      payload: { description: "test", id: 1, title: "test" },
      type: DELETE_STREAM,
    });
    expect(output.length).toBe(data.length - 1);
  });
});
