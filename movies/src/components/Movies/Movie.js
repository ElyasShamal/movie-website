import React, { useState, useEffect } from "react";
import StarRating from "./StarRating";
import AiFillHeart from "./Heart";
import { AiFillEye } from "react-icons/ai";

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

  const updateLike = () => {};

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
          <div className="Clicks">
            {hoverStates[movie.id] && (
              <button className="hover-button">X</button>
            )}
          </div>
          <div className="flex-1">
            <h3 style={{ color: "white" }}>{movie.title}</h3>
            <span style={{ color: "white" }}>
              <AiFillHeart style={{ color: "red" }} onClick={updateLike} />
              {movie.likes}
            </span>
          </div>
          <div className="flex-2">
            <span style={{ color: "white" }}>
              <AiFillEye />
              {movie.views}
            </span>
            <span style={{ color: "orange" }}>{StarRating(movie.rating)} </span>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Movie;
