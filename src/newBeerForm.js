import React, { useState } from 'react';

const NewBeerForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: '',
    contributed_by: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform POST request to create a new beer
    fetch('https://ih-beers-api2.herokuapp.com/beers/new', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log('New beer created successfully:', data);
        // Optionally, you can redirect to another page or update the UI
      })
      .catch((error) => console.error('Error creating new beer:', error));
  };

  return (
    <form className="new-beer-form" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
      </label>
      <label>
        Tagline:
        <input type="text" name="tagline" value={formData.tagline} onChange={handleInputChange} required />
      </label>
      <label>
        Description:
        <input type="text" name="description" value={formData.description} onChange={handleInputChange} required />
      </label>
      <label>
        First Brewed:
        <input type="text" name="first_brewed" value={formData.first_brewed} onChange={handleInputChange} required />
      </label>
      <label>
        Brewers Tips:
        <input type="text" name="brewers_tips" value={formData.brewers_tips} onChange={handleInputChange} required />
      </label>
      <label>
        Attenuation Level:
        <input type="number" name="attenuation_level" value={formData.attenuation_level} onChange={handleInputChange} required />
      </label>
      <label>
        Contributed By:
        <input type="text" name="contributed_by" value={formData.contributed_by} onChange={handleInputChange} required />
      </label>
      <button type="submit">Create Beer</button>
    </form>
  );
};

export default NewBeerForm;