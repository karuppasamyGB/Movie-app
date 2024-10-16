import React from 'react';
import './MovieApp.css';

const MovieCard = ({ movie, loading }) => {
  if (loading) {
    return (
      <div className="movie-card skeleton">
        <div className="skeleton-image"></div>
        <div className="skeleton-text title"></div>
        <div className="skeleton-text year"></div>
        <div className="skeleton-text type"></div>
      </div>
    );
  }

  if (!movie) return <div>Movie not found</div>;

  return (
    <div className="movie-card">
      <h3>{movie.Title}</h3>
      <img src={movie.Poster !== 'N/A' ? movie.Poster : 'searchicon.png'} alt={movie.Title} />
      <p>Year: {movie.Year}</p>
      <p>Type: {movie.Type}</p>
    </div>
  );
};

export default MovieCard;


