import { IStreamData } from "../../shared/Types";
import { IStreamActions } from "../actions/stream";
import {
  ADD_STREAM,
  DELETE_STREAM,
  EDIT_STREAM,
  INIT_STREAM,
} from "../actions/type";

const initState: IStreamData[] = [
  // {
  //   id: "1",
  //   title: "Hello World",
  //   description: "Greetings Martians",
  // },
  // {
  //   title: "New Movie",
  //   description: "Some Set in Mumbai",
  //   id: "2",
  // },
];

// interface IStreamAction extends Action {
//   type: actionType;
//   payload?: IStreamData;
// }

function streamReducer(
  state = initState,
  action: IStreamActions
): IStreamData[] {
  const { type, payload } = action;
  switch (type) {
    case ADD_STREAM:
      return [...state, (payload as IStreamData)!];

    case DELETE_STREAM:
      return state.filter((item) => item.id !== (payload as IStreamData)!.id);

    case EDIT_STREAM:
      return state.map((item) => {
        if (item.id === (payload as IStreamData)!.id) {
          return {
            ...item,
            ...payload,
          };
        } else return item;
      });
    case INIT_STREAM:
      return payload as IStreamData[];
    default:
      return state;
  }
}

export default streamReducer;
