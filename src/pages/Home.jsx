import MovieCard from "../components/Moviecard";
import { useState } from "react";
import "../css/Home.css"
function Home() {
  const [searchquery, setsearchquery] = useState("");
  const movies = [
    { id: 1, title: "tees maar khan", release_date: 2010 },
    { id: 2, title: "PK", release_date: 2002 },
    { id: 3, title: "dangal", release_date: 2004 },
  ];


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
      <div className="movies-grid">
        {movies.map((movie) =>             // Map is used to map all movies dynamically
            movie.title.toLowerCase().startsWith(searchquery)
            && (<MovieCard movie={movie} key={movie.id} /> // id is neccessary to uniquely identify the movie
          )
        )}
      </div>
    </div>
  );
}

export default Home;
