import movieTrailer from 'movie-trailer';
import React, { useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import axios from './axios';
import './Row.css';
const base_url = 'https://image.tmdb.org/t/p/original/';

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState('');

  const options = {
    height: '390',
    width: '100%',
    playerVars: { autoplay: 1 }
  };

  const onClickHandler = (movie) => {
    if (trailerUrl) setTrailerUrl('');
    else {
      movieTrailer(movie?.title || movie?.name)
        .then((url) => {
          const urlParams = new URL(url).searchParams;
          setTrailerUrl(urlParams.get('v'));
        })
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    };
    fetchData();
  }, [fetchUrl]); // if [] - loads one time when component loads

  return (
    <div className='row'>
      <h3>{title} </h3>
      <div className='row__posters'>
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => onClickHandler(movie)}
            className={`row__poster ${isLargeRow && 'row__poster__large'}`}
            src={base_url + (isLargeRow ? movie.poster_path : movie.backdrop_path)}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={options} />}
    </div>
  );
};

export default Row;
