import api from "../api/api";
import {FETCH_NEWS,FETCH_ONE_NEWS, SEARCH_NEWS} from "./type";

export const fetchNews = () => {
    return async (dispatch) => {
      const response = await api.get(`/top-headlines?country=us&apiKey=5d42d6fdf7c242caa51c58e537ef3340`);
      dispatch({ type: FETCH_NEWS, payload: response.data.articles });
    };
  };

  export const searchnews = (news , text) => (dispatch)=>{
    const lowercasedFilter = text.toLowerCase();
   return dispatch({
     type: SEARCH_NEWS,
     payload:{
       text:text,
       newslists:news.filter((items) => {
          return Object.keys(items).some((key) =>
          items.author !== null &&  items.author.toLowerCase().includes(lowercasedFilter)
          );
     })
   }
  })
  };
  
  export const fetchOnenews = (id) => {
    return {
      type: FETCH_ONE_NEWS,
      payload: id,
    };
   
  };
