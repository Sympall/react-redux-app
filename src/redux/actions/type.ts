export const ADD_STREAM = "ADD_STREAM";
export const EDIT_STREAM = "EDIT_STREAM";
export const DELETE_STREAM = "DELETE_STREAM";

export type actionType =
  | typeof ADD_STREAM
  | typeof EDIT_STREAM
  | typeof DELETE_STREAM;
