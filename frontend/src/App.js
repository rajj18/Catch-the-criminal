import React, { useState, useEffect } from "react";
import LandingPage from "./components/LandingPage.jsx";
import CitySelection from "./components/CitySelection.jsx";
import VehicleSelection from "./components/VehicleSelection.jsx";
import ResultPage from "./components/ResultPage.jsx";
import { fetchCities, fetchVehicles, fetchFugitiveLocation } from "./utils/api";

const cops = [
  { id: 1, name: "Cop 1", image: "/images/cop1.jpg", vehicle: "" },
  { id: 2, name: "Cop 2", image: "/images/cop2.jpg", vehicle: "" },
  { id: 3, name: "Cop 3", image: "/images/cop3.jpg", vehicle: "" },
];

const App = () => {
  const [cities, setCities] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [fugitiveLocation, setFugitiveLocation] = useState(null);
  const [currentPage, setCurrentPage] = useState("landing");
  const [captureStatus, setCaptureStatus] = useState(false);
  const [capturingCopIndex, setCapturingCopIndex] = useState(null);
  const [selectedCities, setSelectedCities] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const citiesData = await fetchCities();
        setCities(citiesData);

        const vehiclesData = await fetchVehicles();
        setVehicles(vehiclesData);

        const fugitiveLocationData = await fetchFugitiveLocation();
        //const fugitiveLocationData = cities[Math.floor(Math.random() * cities.length)];
        setFugitiveLocation(fugitiveLocationData);
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle error: Display a user-friendly message
      }
    };

    fetchData();
  }, []);

  const handleCityChange = (copId, city) => {
    setSelectedCities((prevState) => ({
      ...prevState,
      [copId]: city,
    }));
  };

  const handleVehicleChange = (copId, vehicle) => {
    const currentVehicle = cops.filter((e) => e.id === copId)[0].vehicle;
    if (currentVehicle !== "") {
      setVehicles((prevState) => {
        return prevState.map((item) => {
          if (item.kind === currentVehicle) {
            return { ...item, count: item.count + 1 };
          } else {
            return item;
          }
        });
      });
      cops.filter((e) => e.id === copId)[0].vehicle = vehicle;
    }
    setVehicles((prevState) => {
      return prevState.map((item) => {
        if (item.kind === vehicle) {
          return { ...item, count: item.count - 1 };
        } else {
          return item;
        }
      });
    });
    cops.filter((e) => e.id === copId)[0].vehicle = vehicle;
  };

  const handleNextButtonClick = () => {
    setCurrentPage("vehicleSelection");
  };

  const handleVehicleSelection = () => {
    const copId = Object.values(selectedCities).findIndex(
      (e) => e[0] === fugitiveLocation.name
    );
    setCapturingCopIndex(copId)
    if (copId !== -1 && cops[copId].vehicle !== "") {
      setCaptureStatus(true);
    }

    setCurrentPage("result");
  };

  const handleCapture = (copIndex) => {
    setCaptureStatus(true);
    setCapturingCopIndex(copIndex);
    setCurrentPage("landing");
  };

  const resetGame = () => {
    setCaptureStatus(false);
    setCapturingCopIndex(null);
    // setCurrentPage("landing");
    setSelectedCities({});
    window.location.reload();
  };

  let pageContent;
  if (currentPage === "landing") {
    pageContent = (
      <LandingPage onButtonClick={() => setCurrentPage("citySelection")} />
    );
  } else if (currentPage === "citySelection") {
    pageContent = (
      <CitySelection
        cops={cops}
        cities={cities}
        selectedCity={selectedCities}
        handleCityChange={handleCityChange}
        onNextButtonClick={handleNextButtonClick}
      />
    );
  } else if (currentPage === "vehicleSelection") {
    pageContent = (
      <VehicleSelection
        cops={cops}
        selectedCities={selectedCities}
        vehicles={vehicles}
        
        onCapture={handleCapture}
        handleVehicleChange={handleVehicleChange}
        onNextButtonClick={handleVehicleSelection}
      />
    );
  } else if (currentPage === "result") {
    pageContent = (
      <ResultPage
        captureStatus={captureStatus}
        fugitiveLocation={fugitiveLocation}
        capturedBy={capturingCopIndex !== null ? cops[capturingCopIndex] : null}
        onReset={resetGame}
      />
    );
  }

  return <div>{pageContent}</div>;
};

export default App;
