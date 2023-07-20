import React, { useState, useEffect } from "react";
import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isRetrying, setRetrying] = useState(false);

  async function fetchItemHandler() {
    setIsLoading(true);
    setError(null); // Reset the error state before fetching

    try {
      const response = await fetch("https://swapi.dev/api/films/");

      if (!response.ok) {
        throw new Error("Something went wrong....Retrying");
      }

      const data = await response.json();
      const transformedDate = data.results.map((results) => ({
        id: results.episode_id,
        title: results.title,
        releaseDate: results.release_date,
        openingText: results.opening_crawl,
      }));
      setMovies(transformedDate);
    } catch (error) {
      setError(error.message);
      RetryingHandler();
    }

    setIsLoading(false);
  }

  const RetryingHandler = () => {
    setRetrying(true);
  };

  const cancelRetry = () => {
    setRetrying(false);
  };

  useEffect(() => {
    if (isRetrying) {
      const retry = setTimeout(() => {
        fetchItemHandler();
      }, 5000);
      return () => clearTimeout(retry);
    }
  }, [isRetrying]);

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchItemHandler}>Fetch Movies</button>
        {isRetrying && <button onClick={cancelRetry}>Cancel</button>}
      </section>
      <section>
        {isLoading && <div>Loading...</div>}
        {!isLoading && <MoviesList movies={movies} />}
        {error && <p>{error}</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
