import React, { useCallback, useEffect, useState } from "react";
import "./App.css";
import MoviesList from "./components/MoviesList";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import MyForm from "./components/Form";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isRetrying, setRetrying] = useState(false);

  const fetchMoviesData = useCallback(async () => {
    setIsLoading(true);
    setError(null);
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
  }, []);

  useEffect(() => {
    fetchMoviesData();
  }, [fetchMoviesData]);

  const RetryingHandler = () => {
    setRetrying(true);
  };

  const cancelRetry = () => {
    setRetrying(false);
  };

  useEffect(() => {
    if (isRetrying) {
      const retry = setTimeout(() => {
        fetchMoviesData();
      }, 5000);
      return () => clearTimeout(retry);
    }
  }, [isRetrying, fetchMoviesData]);

  return (
    <React.Fragment>
      <MyForm />
      <section className="d-flex justify-content-center align-items-center my-4">
        <Button variant='outline-dark' onClick={fetchMoviesData}>Fetch Movies</Button>
        {isRetrying && <button onClick={cancelRetry} className="btn btn-danger ms-3">Cancel</button>}
      </section>
      <section>
        {isLoading && <div className="d-flex justify-content-center align-items-center my-4">Loading...</div>}
        {!isLoading && <MoviesList movies={movies} />}
        {error && <p>{error}</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
