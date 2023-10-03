import React, { useState, useEffect } from "react";

function Movie() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovie = () =>
      fetch(
        "https://phase-2-backend-json-server-template.onrender.com/Movies"
      ).then((response) => response.json());

    async function startFetching() {
      const moviesData = await fetchMovie();

      setMovies(moviesData);
    }
    startFetching();
  }, []);

  return (
    <section className="movies-container">
      {movies.map((movie) => (
        <div className="avaliable-movies" key={movie.id}>
          <img src={movie.image} alt={movie.title} />
          <h2 style={{ color: "white" }}>{movie.title}</h2>
        </div>
      ))}
    </section>
  );
}

export default Movie;
