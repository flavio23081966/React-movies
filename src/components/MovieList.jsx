import React from 'react';
import { Link } from 'react-router-dom';
import "./MovieList.css";

const MovieList = ({ movies }) => {
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`/movie/${movie.id}`}>
            <img className='poster' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
            <h3>{movie.title}</h3>
            <p>Nota: {movie.vote_average}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default MovieList;
