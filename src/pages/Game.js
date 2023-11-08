import React, { useEffect, useState } from 'react';
import CardBig from '../component/cardbig';
import CardSmall from '../component/CardSmall';
import './Game.css';
import { useNavigate } from 'react-router-dom';

const STAR_COLOR = 'rgb(220, 117, 21)';
const STAR_SIZE = 20;

const Game = () => {
  const [posterData, setPosterData] = useState([]);
  const [gameData, setGameData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    // Fungsi untuk mengambil data poster dari API RAWG untuk game yang populer pada tahun 2020
    const fetchPosterData = async () => {
      try {
        const response = await fetch('https://api.rawg.io/api/games?key=66d9c76733014f039fc291eee3e31979&dates=2020-01-01,2020-12-31'); // Gantilah YOUR_API_KEY dengan API key Anda.
        if (response.ok) {
          const data = await response.json();
          setPosterData(data.results);
        }
      } catch (error) {
        console.error('Error fetching poster data: ', error);
      }
    };

    // Fungsi untuk mengambil data game dari API RAWG untuk game yang populer pada tahun 2020
    const fetchGameData = async () => {
      try {
        const response = await fetch('https://api.rawg.io/api/games?key=66d9c76733014f039fc291eee3e31979&dates=2020-01-01,2020-12-31'); // Gantilah YOUR_API_KEY dengan API key Anda.
        if (response.ok) {
          const data = await response.json();
          setGameData(data.results);
        }
      } catch (error) {
        console.error('Error fetching game data: ', error);
      }
    };

    fetchPosterData();
    fetchGameData();
  }, []);

  return (
    <>
      <p id="games">Trending Games</p>
      <div className="containerTop">
        {posterData.map((item, index) => (
          <CardBig
            key={item.id}
            title={item.name}
            img={item.background_image}
            genre={item.genres.map((genre) => genre.name).join(', ')}
            size={STAR_SIZE}
            color={STAR_COLOR}
            rating={item.rating * 2}
            onClick={() => navigate(`/game/${item.id}`)}
          />
        ))}
      </div>

      <div className="rowcoba">
        <div className="column">
          <p id="games">Top Games</p>
          {gameData.map((item, index) => (
            <CardSmall
              key={item.id}
              title={item.name}
              img={item.background_image}
              genre={item.genres.map((genre) => genre.name).join(', ')}
              size={STAR_SIZE}
              color={STAR_COLOR}
              rating={item.rating * 2}
              onClick={() => navigate(`/game/${item.id}`)}
            />
          ))}
        </div>
        <div className="column">
          <p id="games">Top Games</p>
          {gameData.map((item, index) => (
            <CardSmall
              key={item.id}
              title={item.name}
              img={item.background_image}
              genre={item.genres.map((genre) => genre.name).join(', ')}
              size={STAR_SIZE}
              color={STAR_COLOR}
              rating={item.rating * 2}
              onClick={() => navigate(`/game/${item.id}`)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Game;
