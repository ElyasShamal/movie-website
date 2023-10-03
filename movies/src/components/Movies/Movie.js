import React, { useState, useEffect } from "react";
import StarRating from "./StarRating";

function Movie() {
  const [movies, setMovies] = useState([]);
  const [hoverStates, setHoverStates] = useState({});

  useEffect(() => {
    const fetchMovie = () =>
      fetch(
        "https://phase-2-backend-json-server-template.onrender.com/Movies"
      ).then((response) => response.json());

    async function startFetching() {
      const moviesData = await fetchMovie();
      const initialClicksStates = {};
      moviesData.forEach((movie) => {
        initialClicksStates[movie.id] = false;
      });
      setHoverStates(initialClicksStates);
      setMovies(moviesData);
    }
    startFetching();
  }, []);

  const handleDoubleClick = (movieId) => {
    setHoverStates((prevState) => ({
      ...prevState,
      [movieId]: true,
    }));
  };

  const handleClick = (movieId) => {
    setHoverStates((prevState) => ({
      ...prevState,
      [movieId]: false,
    }));
  };

  return (
    <section className="movies-container">
      {movies.map((movie) => (
        <div className="available-movies" key={movie.id}>
          <img
            src={movie.image}
            alt={movie.title}
            onDoubleClick={() => handleDoubleClick(movie.id)}
            onClick={() => handleClick(movie.id)}
          />
          <div style={{ position: "absolute" }}>
            {hoverStates[movie.id] && (
              <button className="hover-button">X</button>
            )}
          </div>
          <div
            className="titles"
            style={{ color: "white", padding: "10px 0px 5px 10px" }}
          >
            <h3 style={{ color: "white" }}>{movie.title}</h3>
            <span style={{ color: "orange" }}>{StarRating(movie.rating)} </span>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Movie;
