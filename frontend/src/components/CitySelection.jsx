import React, { useState } from "react";
import styles from "./Selection.module.css";

const CitySelectionComponent = ({
  cops,
  cities,
  selectedCity,
  handleCityChange,
  onNextButtonClick,
}) => {
  const [selectedCities, setSelectedCities] = useState(
    Object.values(selectedCity)
  );

  const handleNextClick = () => {
    onNextButtonClick();
  };

  const handleCitySelect = (copIndex, selectedCity) => {
    setSelectedCities((prevSelectedCities) => {
      const updatedCities = [...prevSelectedCities];
      updatedCities[copIndex] = selectedCity.split(",");
      return updatedCities;
    });
    handleCityChange(copIndex + 1, selectedCity.split(","));
  };
  return (
    <div className={styles["vehicle-selection-container"]}>
      <h2>City Selection</h2>
      <ul className={styles["vehicle-list"]}>
        {cops.map((cop, index) => (
          <li key={`${cop.id}-${index}`} className={styles["vehicle-item"]}>
            <h3>{cop.name}</h3>
            <select
              className={styles["select-dropdown"]}
              onChange={(event) => handleCitySelect(index, event.target.value)}
            >
              <option value="">Select City</option>
              {cities.map((city) => (
                <option
                  key={city.name}
                  value={[city.name, city.distance]}
                  disabled= {selectedCities && selectedCities.map(e=>e && e[0]).includes(city.name)}
                  
                >
                  {city.name} (Distance: {city.distance} KM)
                </option>
              ))}
            </select>
          </li>
        ))}
      </ul>
      <button
        className={styles["next-button"]}
        onClick={handleNextClick}
        disabled={
          selectedCities.filter((e) => e && e.length > 0).length !== cops.length
        }
      >
        Next
      </button>
    </div>
  );
};

export default CitySelectionComponent;
