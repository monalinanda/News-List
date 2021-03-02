import api from "../api/api";
import {FETCH_NEWS,FETCH_ONE_NEWS} from "./type";

export const fetchNews = () => {
    return async (dispatch) => {
      const response = await api.get(`/top-headlines?country=us&apiKey=6e3c9285bd6b481bb55472ea98b268cc`);
      dispatch({ type: FETCH_NEWS, payload: response.data.articles });
    };
  };
  
  export const fetchOnenews = (item) => {
    return {
      type: FETCH_ONE_NEWS,
      payload: item,
    };
   
  };
