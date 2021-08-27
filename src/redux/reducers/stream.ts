import { Action } from "redux";
import { IObjData } from "../../shared/Types";
import {
  actionType,
  ADD_STREAM,
  DELETE_STREAM,
  EDIT_STREAM,
} from "../actions/type";

const initState: IObjData[] = [
  {
    id: "1",
    title: "Hello World",
    description: "Greetings Martians",
  },
  {
    title: "New Movie",
    description: "Some Set in Mumbai",
    id: "2",
  },
];

interface StreamAction extends Action {
  type: actionType;
  payload?: IObjData;
}

function streamReducer(state = initState, action: StreamAction): IObjData[] {
  const { type, payload } = action;
  switch (type) {
    case ADD_STREAM:
      return [...state, payload!];

    case DELETE_STREAM:
      return state.filter((item) => item.id !== payload!.id);

    case EDIT_STREAM:
      return state.map((item) => {
        if (item.id === payload!.id) {
          return {
            ...item,
            ...payload,
          };
        } else return item;
      });
    default:
      return state;
  }
}

export default streamReducer;