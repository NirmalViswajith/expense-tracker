import React, { useState } from "react";
import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchItemHandler() {
    setIsLoading(true);
    try {
      const response = await fetch("https://swapi.dev/api/films/");
      const data = await response.json();
      const transformedDate = data.results.map((results) => ({
        id: results.episode_id,
        title: results.title,
        releaseDate: results.release_date,
        openingText: results.opening_crawl,
      }));
      setMovies(transformedDate);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setIsLoading(false); 
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchItemHandler}>Fetch Movies</button>
      </section>
      <section>
        {isLoading ? (
          <div className="loader">Loading...</div> // Show loader when isLoading is true
        ) : (
          <MoviesList movies={movies} />
        )}
      </section>
    </React.Fragment>
  );
}

export default App;
