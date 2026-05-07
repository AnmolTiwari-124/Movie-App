import MovieCard from "../components/Moviecard";
import { useState,useEffect } from "react";
import{getPopularMovies,searchMovies} from '../services/api';
import "../css/Home.css"
function Home() {
  const [searchquery, setsearchquery] = useState("");
  const [movies,setMovies] = useState([]);
  const [error,setError] = useState(null);
  const [loading,setLoading] = useState(null);

  useEffect(()=>{
    const loadPopularMovies = async() => {
      try{
        const popularMovies = await getPopularMovies()
        setMovies(popularMovies)
      }
      catch(err){
        console.log(err)
        setError("failed to load movies...")
      }
      finally{
        setLoading(false);
      }
    }
    loadPopularMovies();
  },[]);

  const handleSearch = (e) => {     
    e.preventDefault();
    // alert(searchquery);
    alert(searchquery.trim());
    setsearchquery("");
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Enter movies name"
          className="search-input"
          value={searchquery}
          onChange={(e) => setsearchquery(e.target.value)}  
        />
        <button type="submit" className="search-button">Search</button>
      </form>

      {error &&  <div className="error-message">{error}</div> }    

      {loading ? (<div className="loading">loading ...</div>)       //if loading then this othewise the movie grid
      : (<div className="movies-grid">
        {movies.map((movie) =>             // Map is used to map all movies dynamically
            movie.title.toLowerCase().startsWith(searchquery)
            && (<MovieCard movie={movie} key={movie.id} /> // id is neccessary to uniquely identify the movie
          )
        )}
      </div>
    )}
       
    </div>
  );
}

export default Home;
