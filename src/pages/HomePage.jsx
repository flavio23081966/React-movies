import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieList from '../components/MovieList';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import "./HomePage.css";

const HomePage = () => {

    
    const apiKey = "440e9500cf76429b03f6766fc4053efe";
    const pathImg = "https://image.tmdb.org/t/p/w500";
    const pathApi = "https://api.themoviedb.org/3/movie/popular";

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
    .get(`${pathApi}?api_key=${apiKey}`)
    .then(response => {
        console.log(response);
      setMovies(response.data.results);
    })
    .catch(error => {
      console.error('Error fetching popular movies:', error);
    });
  }, []);

  return (
    <div>
        <Header />
      
      <MovieList movies={movies} />
      <Footer />
    </div>
  );
}

export default HomePage;
