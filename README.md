﻿# Catch-the-criminal

## Description

This repository contains the code for a web application simulating the capture of a notorious criminal by three fearless cops. Built with a Node.js backend and a frontend framework React.js, the application provides an interactive experience where cops choose their investigation locations and vehicles to capture the criminal.

## Gameplay Overview

* City Selection: Each cop independently selects a city from a list to investigate.

* City names, distances from the current city, and unique selection are enforced.

* Vehicle Selection: Based on the chosen city's distance, cops select electric vehicles suitable for the round trip: Electric bikes, cars, and SUVs with varying ranges and limited quantities are available.

* Vehicle selection ensures sufficient range for the round trip.

* Result: The system randomly simulates the fugitive's location in one city. Based on the cops' choices, it   determines if a capture is successful and displays the capturing cop's name, if applicable.

## Technical Stack

Frontend: React.js
Backend: Node.js (In-memory data structures)

### Key Assumptions

* The criminal is hiding in only one of the five cities.

* Capturing the criminal requires being in the same city.

* In-memory data structures (e.g., arrays or objects) are used for city data, vehicle data, and fugitive location (no database connections).


## Build Instructions

* Clone this repository.
```bash
git clone https://github.com/rajj18/Catch-the-criminal.git
```

* Install Node.js and npm package manager.

* Navigate to the project directory: cd Catch-the-Criminal

* Install dependencies: npm install 

* Start the backend server by navigating to 
```bash
cd Catch-the-Criminal/backend
```
Run backend server
```bash
 npm start
```

Run backend tests 
```bash
npm test
```

* Run the frontend server by navigating to 
```bash
cd Catch-the-Criminal/frontend
```
Run frontend server
```bash
 npm start
```

Run frontend tests 
```bash
npm test
```
