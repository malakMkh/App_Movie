import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/homepage/Home';
import MovieDetail from './components/movie/MovieDetail';

function App() {
  return (
    <Routes>
      <Route path="/movies/:id" element={<MovieDetail />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
