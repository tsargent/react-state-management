import { v4 as id } from "uuid";

const initialState = [
  {
    id: id(),
    text: "Learn hooks",
    complete: false,
  },
  {
    id: id(),
    text: "Learn context",
    complete: false,
  },
];

export default initialState;
