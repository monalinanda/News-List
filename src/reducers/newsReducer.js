import {FETCH_NEWS, FETCH_ONE_NEWS,SEARCH_NEWS} from "../actions/type";

const INITIAL_STATE = {
  newslists: [],
};
  export default (state = {INITIAL_STATE}, action) => {
    switch (action.type) {
      case FETCH_NEWS: 
        return {
          newslists: action.payload ,filterednews:action.payload
      };
      case SEARCH_NEWS:
        return{...state, filterednews:action.payload.newslists ,text:action.payload.text};
      case FETCH_ONE_NEWS: 
      return {
        ...state,
        newslists: [
          ...state.newslists.filter((item) => {
           return item.source.id === action.payload ;
          }),
        ],
      };
      
      default:
        return state;
    }
  };