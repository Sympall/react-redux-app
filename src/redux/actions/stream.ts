import { Dispatch } from "redux";
import { IStreamData } from "../../shared/Types";
import * as actions from "./type";

export interface IStreamActions {
  type: actions.actionType;
  payload: IStreamData;
}

export const addStream =
  (title: string, desc: string) => (dispatch: Dispatch<IStreamActions>) => {
    dispatch({
      type: actions.ADD_STREAM,
      payload: {
        title,
        description: desc,
        id: Math.floor(Math.random() * 10) + "",
      },
    });
  };

export const editStream =
  (id: string, title: string, desc: string) =>
  (dispatch: Dispatch<IStreamActions>) => {
    dispatch({
      type: actions.EDIT_STREAM,
      payload: { title, description: desc, id },
    });
  };

export const deleteStream =
  (id: string) => (dispatch: Dispatch<IStreamActions>) => {
    dispatch({
      type: actions.DELETE_STREAM,
      payload: { id, description: "", title: "" },
    });
  };
