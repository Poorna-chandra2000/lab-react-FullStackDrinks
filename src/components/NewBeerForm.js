import React, { useState } from 'react';
import axios from 'axios';
import './NewBeerForm.css';

const NewBeerForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: '',
    contributed_by: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://ih-beers-api2.herokuapp.com/beers/new', formData);
      alert('New beer successfully saved to database!');
      setFormData({
        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewers_tips: '',
        attenuation_level: '',
        contributed_by: ''
      });
    } catch (error) {
      console.error('Error creating new beer:', error);
      alert('Error creating new beer. Please try again.');
    }
  };

  return (
    <div className="new-beer-form-container">
      <h2>Create a New Beer</h2>
      <form className="new-beer-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        <label htmlFor="tagline">Tagline:</label>
        <input type="text" id="tagline" name="tagline" value={formData.tagline} onChange={handleChange} required />
        <label htmlFor="description">Description:</label>
        <textarea id="description" name="description" value={formData.description} onChange={handleChange} required />
        <label htmlFor="first_brewed">First Brewed:</label>
        <input type="text" id="first_brewed" name="first_brewed" value={formData.first_brewed} onChange={handleChange} required />
        <label htmlFor="brewers_tips">Brewers Tips:</label>
        <input type="text" id="brewers_tips" name="brewers_tips" value={formData.brewers_tips} onChange={handleChange} required />
        <label htmlFor="attenuation_level">Attenuation Level:</label>
        <input type="number" id="attenuation_level" name="attenuation_level" value={formData.attenuation_level} onChange={handleChange} required />
        <label htmlFor="contributed_by">Contributed By:</label>
        <input type="text" id="contributed_by" name="contributed_by" value={formData.contributed_by} onChange={handleChange} required />
        <button type="submit">Create Beer</button>
      </form>
    </div>
  );
}

export default NewBeerForm;
