import React, { useEffect, useState } from 'react';
import './DetailGames.css';
import { useParams } from 'react-router-dom';

const DetailGame = () => {
  const [game, setGame] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    // Fungsi untuk mengambil data detail game dari API RAWG berdasarkan ID
    const fetchGameData = async () => {
      try {
        const response = await fetch(`https://api.rawg.io/api/games/${id}?key=66d9c76733014f039fc291eee3e31979`);
        if (response.ok) {
          const data = await response.json();
          setGame(data);
        }
      } catch (error) {
        console.error('Error fetching game data: ', error);
      }
    };

    fetchGameData();
  }, [id]);

  return (
    <div className="detail-container">
      {game ? (
        <>
          <h1>{game.name}</h1>
          <img src={game.background_image} alt={game.name} />
          <p>Genre: {game.genres.map((genre) => genre.name).join(', ')}</p>
          <p2>{game.description_raw}</p2>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default DetailGame;
