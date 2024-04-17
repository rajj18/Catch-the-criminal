import axios from 'axios';

const baseURL = 'https://catch-the-criminal-backend.onrender.com'; // backend port 

export const fetchCities = async () => {
  try {
    const response = await axios.get(`${baseURL}/cities`);
    return response.data;
  } catch (error) {
    console.error('Error fetching cities:', error);
  }
};

export const fetchVehicles = async () => {
  try {
    const response = await axios.get(`${baseURL}/vehicles`);
    return response.data;
  } catch (error) {
    console.error('Error fetching vehicles:', error);
  }
};

export const fetchFugitiveLocation = async () => {
  try {
    const response = await axios.get(`${baseURL}/fugitive-location`);
    return response.data;
  } catch (error) {
    console.error('Error fetching fugitive location:', error);
  }
};



