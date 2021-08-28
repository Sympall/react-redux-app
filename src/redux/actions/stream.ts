import { Dispatch } from "redux";
import { StreamApi } from "../../services";
import { IStreamData } from "../../shared/Types";
import * as actions from "./type";

export interface IStreamActions {
  type: actions.actionType;
  payload: IStreamData | IStreamData[];
}
let id = 0;
export const addStream =
  (title: string, desc: string) =>
  async (dispatch: Dispatch<IStreamActions>) => {
    try {
      const res = await StreamApi.post({
        title,
        description: desc,
        id: id,
      });
      id++;
      dispatch({
        type: actions.ADD_STREAM,
        payload: res,
      });
    } catch (err) {
      console.error("POST ERROR:: add stream", err);
    }
  };

export const editStream =
  (id: number, title: string, desc: string) =>
  async (dispatch: Dispatch<IStreamActions>) => {
    try {
      const payload = { id, title, description: desc };
      await StreamApi.update(id, payload);
      dispatch({
        type: actions.EDIT_STREAM,
        payload,
      });
    } catch (err) {
      console.error("UPDATE ERROR:: edit stream", err);
    }
  };

export const deleteStream =
  (id: number) => async (dispatch: Dispatch<IStreamActions>) => {
    try {
      await StreamApi.remove(id);
      dispatch({
        type: actions.DELETE_STREAM,
        payload: { id, description: "", title: "" },
      });
    } catch (e) {
      console.error("DELETE::STREAM", e);
    }
  };

export const retrieveStreams =
  () => async (dispatch: Dispatch<IStreamActions>) => {
    try {
      const streams = await StreamApi.getAll();
      if (streams.length > 0) {
        id = Number(streams.slice(-1)[0].id) + 1;
      }
      dispatch({
        type: actions.INIT_STREAM,
        payload: streams,
      });
    } catch (err) {
      console.error("RETRIVE::STREAM", err);
    }
  };
