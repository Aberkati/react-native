import uuid from "uuid-random";

const initialState = [
  { id: uuid(), text: "Pates" },
  { id: uuid(), text: "Fromage" },
  { id: uuid(), text: "Lait" },
  { id: uuid(), text: "Oeufs" },
];
import { ADD_ITEM, DELETE_ITEM } from "../actions/types";

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_ITEM:
      return [...state, payload];
    case DELETE_ITEM:
      return state.filter((item) => item.id !== payload);
    default:
      return state;
  }
}
