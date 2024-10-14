import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const BeerDetails = () => {
  const { beerId } = useParams();
  const [beer, setBeer] = useState(null);

  useEffect(() => {
    // Fetch data for the selected beer
    fetch(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then((response) => response.json())
      .then((data) => setBeer(data))
      .catch((error) => console.error('Error fetching beer details:', error));
  }, [beerId]);

  if (!beer) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{beer.name}</h2>
      <img src={beer.image_url} alt={beer.name} style={{ maxWidth: '100px' }} />
      <p>{beer.tagline}</p>
      <p>First Brewed: {beer.first_brewed}</p>
      <p>Attenuation Level: {beer.attenuation_level}</p>
      <p>Description: {beer.description}</p>
      <p>Contributed by: {beer.contributed_by}</p>
    </div>
  );
};

export default BeerDetails;