import React, { useState, useEffect } from 'react';

const RandomBeer = () => {
  const [randomBeer, setRandomBeer] = useState(null);

  useEffect(() => {
    fetch('https://ih-beers-api2.herokuapp.com/beers/random')
      .then((response) => response.json())
      .then((data) => setRandomBeer(data))
      .catch((error) => console.error('Error fetching random beer details:', error));
  }, []);

  if (!randomBeer) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{randomBeer.name}</h2>
      <img src={randomBeer.image_url} alt={randomBeer.name} style={{ maxWidth: '100px' }} />
      <p>{randomBeer.tagline}</p>
      <p>First Brewed: {randomBeer.first_brewed}</p>
      <p>Attenuation Level: {randomBeer.attenuation_level}</p>
      <p>Description: {randomBeer.description}</p>
      <p>Contributed by: {randomBeer.contributed_by}</p>
    </div>
  );
};

export default RandomBeer;