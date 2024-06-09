import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import "./MovieDetails.css";

const MovieDetails = () => {
    const param = useParams();

    const [movie, setMovie] = useState(null);

    const apiKey = "440e9500cf76429b03f6766fc4053efe";
    const pathImg = "https://image.tmdb.org/t/p/w500";
    const pathApi = "https://api.themoviedb.org/3/movie/";

    useEffect(() => {
        axios
            .get(`${pathApi}${param.id}?api_key=${apiKey}`)
            .then((response) => {
                setMovie(response.data);

                console.log(response.data);
            })
    }, []);


    return (<div>
        {movie ? (
            <div className='detalhe'>
                <div className='detalhe-img'>
                    <img src={`${pathImg}${movie.poster_path}`} alt={movie.title} />
                </div>
                <div className='detalhe-descr'>
                    <h2>{movie.title}</h2>
                    <p>Sinopse: {movie.overview}</p>
                    <p>Data de Lançamento: {movie.release_date}</p>
                    <p>Nota: {movie.vote_average}</p>
                    <Link className='voltar' to="/">Voltar para a lista de filmes</Link>
                </div>

            </div>
        ) : (
            <p>Carregando...</p>
        )}
    </div>
    );

}

export default MovieDetails;


/*

   <div><img src={`${pathImg}${movie.poster_path}`} /></div>
   <div>Título: {movie.title}</div>
   <div>Sinopse: {movie.overview}</div>
   <div>Data de Lançamento: {movie.release_date}</div>
   <div>Nota: {movie.vote_average}</div>
{movie.map((mv, index) => (
            <div className="movie-box">
                <div className="poster">
                    <img src={`${pathImg}${mv.poster_path}`} />
                </div>
                <h2>{mv.title}</h2><p>Sinopse: {mv.overview}</p>
                <p>Data de Lançamento: {mv.release_date}</p>
                <p>Nota: {mv.vote_average}</p>
                <Link to="/">Voltar para a lista de filmes</Link>
            </div>


        ))}*/ 