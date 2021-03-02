import api from "../api/api";
import {FETCH_NEWS,FETCH_ONE_NEWS} from "./type";

export const fetchNews = () => {
    return async (dispatch) => {
      const response = await api.get(`/top-headlines?country=us&apiKey=5d42d6fdf7c242caa51c58e537ef3340`);
      dispatch({ type: FETCH_NEWS, payload: response.data.articles });
    };
  };
  
  export const fetchOnenews = (id) => {
    return {
      type: FETCH_ONE_NEWS,
      payload: id,
    };
   
  };
