import { useEffect, useState } from "react";
import "./App.css";
import MovieCard from "./MovieCard";
import Searchicon from "./search.svg";
//ec515925
const APIURL = "http://www.omdbapi.com?apikey=ec515925";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm,setsearchTerm]=useState('');
  
  
  const searchmovies = async (title) => {
    const response = await fetch(`${APIURL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
    console.log(data);
  };

  useEffect(() => {
    searchmovies("marvel");
  }, []);

  return (
    <div className="app">
      <h1>Movies24</h1>

      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setsearchTerm(e.target.value)}
        ></input>
        <img 
        src={Searchicon} 
        alt="search" 
        onClick={() => searchmovies(searchTerm)} 
        />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) 
      : 
      (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
