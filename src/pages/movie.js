import React, { useEffect, useState } from 'react';
import CardBig from '../component/cardbig';
import CardSmall from '../component/CardSmall';
import './Movie.css';
import { useNavigate } from 'react-router-dom';

const STAR_COLOR = 'rgb(220, 117, 21)';
const STAR_SIZE = 20;

const Movie = () => {
  const [posterData, setPosterData] = useState([]);
  const [filmData, setFilmData] = useState([]);
  const [genreData, setGenreData] = useState({});

  const navigate = useNavigate(); // Menggunakan useNavigate untuk navigasi

  useEffect(() => {
    // Fungsi untuk mengambil data poster dari API
    const fetchPosterData = async () => {
      try {
        const response = await fetch('https://api.themoviedb.org/3/trending/movie/week?api_key=d42a58ad94fd1b2fc1b4b08f8ad3a39d');
        if (response.ok) {
          const data = await response.json();
          setPosterData(data.results);
        }
      } catch (error) {
        console.error('Error fetching poster data: ', error);
      }
    };

    // Fungsi untuk mengambil data film dari API
    const fetchFilmData = async () => {
      try {
        const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=d42a58ad94fd1b2fc1b4b08f8ad3a39d');
        if (response.ok) {
          const data = await response.json();
          setFilmData(data.results);
        }
      } catch (error) {
        console.error('Error fetching film data: ', error);
      }
    };

    // Fungsi untuk mengambil data genre dari API TMDB
    const fetchGenreData = async () => {
      try {
        const response = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=d42a58ad94fd1b2fc1b4b08f8ad3a39d');
        if (response.ok) {
          const data = await response.json();
          const genreMapping = {};
          data.genres.forEach((genre) => {
            genreMapping[genre.id] = genre.name;
          });
          setGenreData(genreMapping);
        }
      } catch (error) {
        console.error('Error fetching genre data: ', error);
      }
    };

    fetchPosterData();
    fetchFilmData();
    fetchGenreData();
  }, []);

  return (
    <>
      <p id="movies">Trending Movies</p>
      <div className="containerTop">
        {posterData.map((item, index) => (
          <CardBig
            key={item.id}
            title={item.title}
            img={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
            genre={item.genre_ids.map((genreId) => genreData[genreId]).join(', ')}
            size={STAR_SIZE}
            color={STAR_COLOR}
            rating={item.vote_average}
            onClick={() => navigate(`/movie/${item.id}`)}
          />
        ))}
      </div>

      <div className="rowcoba">
        <div className="column">
          <p id="movies">Top Movies</p>
          {filmData.map((item, index) => (
            <CardSmall
              key={item.id}
              title={item.title}
              img={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              genre={item.genre_ids.map((genreId) => genreData[genreId]).join(', ')}
              size={STAR_SIZE}
              color={STAR_COLOR}
              rating={item.vote_average}
              onClick={() => navigate(`/movie/${item.id}`)} // Navigasi ke halaman detail
            />
          ))}
        </div>
        <div className="column">
          <p id="movies">Top Movies</p>
          {filmData.map((item, index) => (
            <CardSmall
              key={item.id}
              title={item.title}
              img={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              genre={item.genre_ids.map((genreId) => genreData[genreId]).join(', ')}
              size={STAR_SIZE}
              color={STAR_COLOR}
              rating={item.vote_average}
              onClick={() => navigate(`/movie/${item.id}`)} // Navigasi ke halaman detail
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Movie;
