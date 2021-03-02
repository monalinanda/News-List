import { FETCH_NEWS, FETCH_ONE_NEWS } from "../actions/type";

const INITIAL_STATE = {
  newslists: [],
};
export default (state = { INITIAL_STATE }, action) => {
  switch (action.type) {
    case FETCH_NEWS:
      return {
        newslists: action.payload,
      };
    case FETCH_ONE_NEWS:
      return {
        ...state,
        newslists: [
          ...state.newslists.filter((item) => {
            return item.source.id === action.payload;
          }),
        ],
      };

    default:
      return state;
  }
};
