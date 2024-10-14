import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "./BeerDetail.css";

const BeerDetail = () => {
  const [beer, setBeer] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchBeer = async () => {
      try {
        const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`);
        setBeer(response.data);
      } catch (error) {
        console.error('Error fetching beer:', error);
      }
    };

    fetchBeer();
  }, [id]);

  return (
    <div className="beer-detail-container">
      {beer && (
        <div className="beer-detail">
          <img src={beer.image_url} alt={beer.name} style={{ width: '150px' }} />
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

export default BeerDetail;
