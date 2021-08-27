import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import thunk from "redux-thunk";
import { useSelector } from "react-redux";
import { IStoreState } from "../shared/Types";

const store = createStore(reducers, applyMiddleware(thunk));

export default store;

export const useStreamData = () =>
  useSelector((state: IStoreState) => state.stream);
