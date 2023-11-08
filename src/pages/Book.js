import React, { useEffect, useState } from 'react';
import CardBig from '../component/cardbig';
import CardSmall from '../component/CardSmall';
import './Book.css';
import { useNavigate } from 'react-router-dom';

const Book = () => {
  const [posterData, setPosterData] = useState([]);
  const [filmData, setFilmData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    // Fungsi untuk mengambil data buku dari Google Books API
    const fetchPosterData = async () => {
      try {
        const response = await fetch('https://www.googleapis.com/books/v1/volumes?q=adventure&maxResults=30');
        if (response.ok) {
          const data = await response.json();
          setPosterData(data.items);
        }
      } catch (error) {
        console.error('Error fetching poster data: ', error);
      }
    };

    // Fungsi untuk mengambil data buku dari Google Books API
    const fetchFilmData = async () => {
      try {
        const response = await fetch('https://www.googleapis.com/books/v1/volumes?q=adventure&maxResults=30');
        if (response.ok) {
          const data = await response.json();
          setFilmData(data.items);
        }
      } catch (error) {
        console.error('Error fetching film data: ', error);
      }
    };

    fetchPosterData();
    fetchFilmData();
  }, []);

  return (
    <>
      <p id="books">Adventure Books</p>
      <div className="containerTop">
        {posterData.map((item, index) => (
          <CardBig
            key={item.id}
            title={item.volumeInfo.title}
            img={item.volumeInfo.imageLinks.thumbnail}
            genre={item.volumeInfo.categories}
            rating={10}
            onClick={() => navigate(`/book/${item.id}`)}
          />
        ))}
      </div>

      <div className="rowcoba">
        <div className="column">
          <p id="books">Top Adventure Books</p>
          {filmData.map((item, index) => (
            <CardSmall
              key={item.id}
              title={item.volumeInfo.title}
              img={item.volumeInfo.imageLinks.thumbnail}
              genre={item.volumeInfo.categories}
              rating={10}
              onClick={() => navigate(`/book/${item.id}`)}
            />
          ))}
        </div>
        <div className="column">
          <p id="books">Top Adventure Books</p>
          {filmData.map((item, index) => (
            <CardSmall
              key={item.id}
              title={item.volumeInfo.title}
              img={item.volumeInfo.imageLinks.thumbnail}
              genre={item.volumeInfo.categories}
              rating={10}
              onClick={() => navigate(`/book/${item.id}`)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Book;
