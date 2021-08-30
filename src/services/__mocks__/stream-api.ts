import { IStreamData } from "../../shared/Types";

export default {
  getAll: () => {
    return new Promise((resolve: Function, reject: Function) => resolve([]));
  },
  post: (data: IStreamData) =>
    new Promise((resolve: Function, reject: Function) => resolve(data)),
  update: (data: IStreamData) =>
    new Promise((resolve: Function, reject: Function) => resolve(data)),
  remove: (id: number) =>
    new Promise((resolve: Function, reject: Function) => resolve(id)),
};
