import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from './components/MovieCard';
import SearchBar from './components/SearchBar';
import './App.css';

const API_URL = 'http://www.omdbapi.com/?apikey=e2183b06';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchMovies = async (title) => {
    setLoading(true);
    try {
      const response = await axios.get(`${API_URL}&s=${title}`);
      if (response.data.Search) {
        setMovies(response.data.Search);
      } else {
        setMovies([]);
      }
    } catch (error) {
      console.error('Error fetching movies:', error);
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies('a');
  }, []);

  const skeletonCards = Array.from({ length: 6 }).map((_, index) => (
    <MovieCard key={index} loading={true} />
  ));

  return (
    <div className="app">
      <h1 className="colorful-heading">Cine Stream</h1>
      <SearchBar onSearch={fetchMovies} />
      <div className="movies-list">
        {loading
          ? skeletonCards
          : movies.length > 0
          ? movies.map((movie) => <MovieCard key={movie.imdbID} movie={movie} />)
          : <br/>}
      </div>
    </div>
  );
};

export default App;

