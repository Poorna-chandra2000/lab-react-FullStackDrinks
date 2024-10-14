import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './BeerList.css'; 

const BeerList = () => {
  const [beers, setBeers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchBeers = async () => {
      try {
        const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers${searchQuery ? `/search?q=${searchQuery}` : ''}`);
        setBeers(response.data);
      } catch (error) {
        console.error('Error fetching beers:', error);
      }
    };

    fetchBeers();
  }, [searchQuery]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="beer-list-container">
      <h2>All Beers</h2>
      <input type="text" value={searchQuery} onChange={handleSearch} placeholder="Search beers..." />
      <ul>
        {beers.map(beer => (
          <li key={beer._id}>
            <Link to={`/beers/${beer._id}`}>
              <img src={beer.image_url} alt={beer.name} />
              <div>
                <h3>{beer.name}</h3>
                <p>{beer.tagline}</p>
                <p>Contributed by: {beer.contributed_by}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BeerList;
