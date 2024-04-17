const express = require('express');
const router = express.Router();
const { getCities, getVehicles, fugitiveLocation } = require('./operations');

// Get all cities
router.get('/cities', (req, res) => {
  try {
    const cities = getCities();
    res.json(cities);
  } catch (error) {
    console.error('Error fetching cities:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Get all vehicles
router.get('/vehicles', (req, res) => {
  try {
    const vehicles = getVehicles();
    res.json(vehicles);
  } catch (error) {
    console.error('Error fetching vehicles:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Get fugitive's location
router.get('/fugitive-location', (req, res) => {
  try {
    const cities = getCities();
    const fugitiveLocation = cities[Math.floor(Math.random() * cities.length)];
    res.json(fugitiveLocation);
  } catch (error) {
    console.error('Error fetching fugitive location:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
