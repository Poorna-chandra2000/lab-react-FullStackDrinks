
import React from 'react';
import { Link } from 'react-router-dom';
import beer2 from '../assets/beers.png';
import beer3 from '../assets/new-beer.png';
import beer from '../assets/random-beer.png';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="container">
      <Link to="/beers">
        <div id="all-beers" className="main-element">
            <img src={beer2} alt="All Beers" />
            <h2>All Beers</h2>
            <p>Explore our vast collection of <br/> handcrafted beers from around the world.</p>
        </div>
      </Link>
      <Link to="/random-beer">
        <div id="random-beer" className="main-element">
            <img src={beer} alt="Random Beer" />
            <h2>Random Beer</h2>
            <p>Discover a new favorite with <br/> our selection of random beers.</p>
        </div>
      </Link>
      <Link to="/new-beer">
        <div id="new-beer" className="main-element">
            <img src={beer3} alt="New Beer" />
            <h2>New Beer</h2>
            <p>Create your own beer masterpiece with <br/> our easy-to-use new beer form.</p>
        </div>
      </Link>
    </div>
  );
}

export default HomePage;