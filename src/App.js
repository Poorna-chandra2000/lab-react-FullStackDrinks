import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import Header from './components/Header';
import BeerList from './components/BeerList';
import BeerDetail from './components/BeerDetail';
import RandomBeer from './components/RandomBeer';
import NewBeerForm from './components/NewBeerForm';

function App() {
  return (
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/" exact Component={HomePage} />
            <Route path="/beers" exact Component={BeerList} />
            <Route path="/beers/:id" Component={BeerDetail} />
            <Route path="/random-beer" Component={RandomBeer} />
            <Route path="/new-beer" Component={NewBeerForm} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
