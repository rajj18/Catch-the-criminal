const { cities, vehicles, fugitiveLocation } = require('./data');

// Read
const getCities = () => cities;
const getVehicles = () => vehicles;

module.exports = { getCities, getVehicles, fugitiveLocation };
