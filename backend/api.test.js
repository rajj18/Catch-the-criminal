const request = require('supertest');
const express = require('express');
const app = express();
const router = require('./routes');

// Mount the router on the app
app.use('/', router);

// Test for GET /cities route
test('GET /cities should return all cities', async () => {
  const response = await request(app).get('/cities');
  expect(response.status).toBe(200);
  expect(response.body).toEqual( [
    { name: 'Yapkashnagar', distance: 60 },
    { name: 'Lihaspur', distance: 50 },
    { name: 'Narmis City', distance: 40 },
    { name: 'Shekharvati', distance: 30 },
    { name: 'Nuravgram', distance: 20 }
  ]);
});

// Test for GET /vehicles route
test('GET /vehicles should return all vehicles', async () => {
  const response = await request(app).get('/vehicles');
  expect(response.status).toBe(200);
  expect(response.body).toEqual([
    { kind: 'EV Bike', range: 60, count: 2 },
    { kind: 'EV Car', range: 100, count: 1 },
    { kind: 'EV SUV', range: 120, count: 1 }
  ]);
});

// Test for GET /fugitive-location route
test('GET /fugitive-location should return a random location', async () => {
  const response = await request(app).get('/fugitive-location');
  expect(response.status).toBe(200);
  expect(response.body).toBeDefined(); // Assuming the response contains a location object
});
