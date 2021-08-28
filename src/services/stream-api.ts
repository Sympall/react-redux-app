import { IStreamData } from "../shared/Types";
import { http } from "./http-common";

const getAll = () => {
  return http.get<IStreamData[]>("/streams/");
};

const post = (data: IStreamData) => {
  return http.post<IStreamData>("/streams", data);
};

const update = (id: number, data: IStreamData) => {
  return http.put<IStreamData>(`/streams/${id}`, data);
};

const remove = (id: number) => {
  return http.delete(`/streams/${id}`);
};

const StreamService = {
  getAll,
  update,
  remove,
  post,
};

export default StreamService;
