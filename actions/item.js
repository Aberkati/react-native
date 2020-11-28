import uuid from "uuid-random";
import { ADD_ITEM, DELETE_ITEM } from "./types";

export const addItem = (text) => (dispatch) => {
  if (text !== "" && text.charCodeAt(0) !== 32) {
    const id = uuid();
    dispatch({
      type: ADD_ITEM,
      payload: { id, text },
    });
  }
};

export const deleteItem = (id) => (dispatch) => {
  dispatch({
    type: DELETE_ITEM,
    payload: id,
  });
};
