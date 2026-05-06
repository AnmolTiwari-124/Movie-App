const API_KEY ="ee2a85a66d948427cb0d4ecfcb30f45d";

const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () =>  {
 const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
 const data = await response.json();
 return data.results;
};

export const searchMovies = async (query)=>{
 const response = await fetch(
  `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
 const data = await response.json();
 return data.results;
};
