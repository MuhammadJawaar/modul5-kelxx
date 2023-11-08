import React, { useEffect, useState } from 'react';
import './DetailBook.css';
import { useParams } from 'react-router-dom';

const DetailBook = () => {
  const [book, setBook] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    // Fungsi untuk mengambil data detail buku dari Google Books API berdasarkan ID
    const fetchBookData = async () => {
      try {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes/${id}`);
        if (response.ok) {
          const data = await response.json();
          setBook(data);
        }
      } catch (error) {
        console.error('Error fetching book data: ', error);
      }
    };

    fetchBookData();
  }, [id]);

  return (
    <div className="detail-container">
      {book ? (
        <>
          <h1>{book.volumeInfo.title}</h1>
          <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
          <p>Genre: Adventure</p>
          <p2>{book.volumeInfo.description}</p2>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default DetailBook;
