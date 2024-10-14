import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './RandomBeer.css'; 

const RandomBeer = () => {
  const [beer, setBeer] = useState(null);

  useEffect(() => {
    const fetchRandomBeer = async () => {
      try {
        const response = await axios.get('https://ih-beers-api2.herokuapp.com/beers/random');
        setBeer(response.data);
      } catch (error) {
        console.error('Error fetching random beer:', error);
      }
    };

    fetchRandomBeer();
  }, []);

  return (
    <div className="random-beer-container">
      {beer && (
        <div className="random-beer">
          <img src={beer.image_url} alt={beer.name} />
          <h2>{beer.name}</h2>
          <p>{beer.tagline}</p>
          <p><strong>First Brewed:</strong> {beer.first_brewed}</p>
          <p><strong>Attenuation Level:</strong> {beer.attenuation_level}</p>
          <p><strong>Description:</strong> {beer.description}</p>
          <p><strong>Contributed by:</strong> {beer.contributed_by}</p>
        </div>
      )}
    </div>
  );
}

export default RandomBeer;
