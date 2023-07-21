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
      const response = await fetch("https://react-app-b039c-default-rtdb.firebaseio.com/movies.json");
      if (!response.ok) {
        throw new Error("Something went wrong....Retrying");
      }

      const data = await response.json();

      const loadedMovies = [];
      for (const key in data) { 
        loadedMovies.push({
          id: key,
          title: data[key].title,
          releaseDate: data[key].release_date,
          openingText: data[key].opening_crawl,
        });
      }

      setMovies(loadedMovies);
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

  async function postMovieHandler(movie) {
    const response = await fetch('https://react-app-b039c-default-rtdb.firebaseio.com/movies.json', {
      method: 'POST',
      body: JSON.stringify(movie),
      headers: {
        'content-type': 'application/json'
      }
    });
    const data = await response.json();
    console.log(data);
  }

  async function deleteMovieHandler(movieID) {
    try {
      const response = await fetch(`https://react-app-b039c-default-rtdb.firebaseio.com/movies/${movieID}.json`, {
        method: 'DELETE',
      });
  
      if (!response.ok) {
        throw new Error("Could not delete the movie.");
      }
  
      setMovies((prevMovies) => prevMovies.filter((movie) => movie.id !== movieID));
    } catch (error) {
      setError(error.message);
    }
  }
  

  return (
    <React.Fragment>
      <MyForm addMovie={postMovieHandler} />
      <section className="d-flex justify-content-center align-items-center my-4">
        <Button variant="outline-dark" onClick={fetchMoviesData}>Fetch Movies</Button>
        {isRetrying && <button onClick={cancelRetry} className="btn btn-danger ms-3">Cancel</button>}
      </section>
      <section>
        {isLoading && <div className="d-flex justify-content-center align-items-center my-4">Loading...</div>}
        {!isLoading && <MoviesList movies={movies} deleteHandler={deleteMovieHandler} />} {/* Pass deleteHandler prop */}
        {error && <p>{error}</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
