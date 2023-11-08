import React from "react";
import { BrowserRouter, Route, Routes, Link, Navigate } from "react-router-dom";
import { HiHome } from "react-icons/hi";
import { MdGroup } from "react-icons/md";
import { FaBook, FaGooglePlay } from "react-icons/fa"; 
import "./App.css";
import Movie from "./pages/movie";
import Profile from "./pages/profile";
import Book from "./pages/Book";
import Game from "./pages/Game";
import MovieDetailPage from "./pages/MovieDetailPage";
import DetailBook from "./pages/DetailBook";
import DetailGame from "./pages/DetailGames";

function App() {
  return (
    <BrowserRouter>
      <header>
        <p id="titleGroup">Kelompok 36</p>
      </header>
      <Routes>
        <Route path="/" element={<Navigate to="/movie" replace />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/book" element={<Book />} />
        <Route path="/game" element={<Game />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/movie/:id" element={<MovieDetailPage />} />
        <Route path="/book/:id" element={<DetailBook />} />
        <Route path="/game/:id" element={<DetailGame />} />
      </Routes>
      <footer>
        <Link to="/movie" className="iconWrapper">
          <HiHome className="icon" />
          Movie
        </Link>
        <Link to="/book" className="iconWrapper">
          <FaBook className="icon" /> 
          Book
        </Link>
        <Link to="/game" className="iconWrapper">
          <FaGooglePlay className="icon" /> 
          Game
        </Link>
        <Link to="/profile" className="iconWrapper">
          <MdGroup className="icon" />
          Profile
        </Link>
      </footer>
    </BrowserRouter>
  );
}

export default App;
