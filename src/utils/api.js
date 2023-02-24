import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3"
const API_KEY = "1924bee4aad34818c405e8b00f1ca742";
const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;

const headers= {
  Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async(url, params)=>{

  try{
    const {data}=  await axios.get(`https://api.themoviedb.org/3/${url}?api_key=${API_KEY}`, {
      headers,
      params
    });
    return data;
  }catch(err){
    console.log(err);
    return err;
  }
};