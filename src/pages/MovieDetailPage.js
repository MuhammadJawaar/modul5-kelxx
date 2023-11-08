import React, { useEffect, useState } from 'react';
import './MovieDetailPage.css';
import { useParams } from 'react-router-dom';

const MovieDetailPage = () => {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    // Fungsi untuk mengambil data detail film dari API TMDb berdasarkan ID
    const fetchMovieData = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=d42a58ad94fd1b2fc1b4b08f8ad3a39d`);
        if (response.ok) {
          const data = await response.json();
          setMovie(data);
        }
      } catch (error) {
        console.error('Error fetching movie data: ', error);
      }
    };

    fetchMovieData();
  }, [id]);

  return (
    <div className="detail-container">
      {movie ? (
        <>
          <h1>{movie.title}</h1>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
          <p>Genre: {movie.genres.map((genre) => genre.name).join(', ')}</p>
          <p2>{movie.overview}</p2>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MovieDetailPage;
