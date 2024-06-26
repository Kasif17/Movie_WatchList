import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer'
import AddMovie from './components/AddMovie';
import EditMovie from './components/EditMovie';
import MovieList from './components/MovieList';
import './App.css'

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/add" element={<AddMovie />} />
        <Route path="/edit/:id" element={<EditMovie />} />
      </Routes>
  
    </Router>
  );
}

export default App;

