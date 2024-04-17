import React from 'react';
import styles from './Selection.module.css';

const VehicleSelectionComponent = ({ cops, selectedCities, vehicles, handleVehicleChange, onNextButtonClick }) => {

  const handleNextClick = () => {
    onNextButtonClick();
  };
  return (
    <div className={styles['vehicle-selection-container']}>
      <h2>Vehicle Selection</h2>
      <ul className={styles['vehicle-list']}>
        {cops.map((cop, index) => (
          <li key={`${cop.id}-${index}`} className={styles['vehicle-item']}>
            <h3>{cop.name}</h3>
            <select className={styles['select-dropdown']} onChange={event => handleVehicleChange(cop.id, event.target.value)}>
              <option value="">Select Vehicle</option>
              {vehicles.map(vehicle => (
                <option key={vehicle.kind} value={vehicle.kind} disabled={vehicle.count === 0 || 2 * selectedCities[cop.id][1] > vehicle.range}>
                  {vehicle.kind} (Range: {vehicle.range} KM) (Count: {vehicle.count})
                </option>
              ))}
            </select>
          </li>
        ))}
      </ul>
      <button className={styles['next-button']} onClick={handleNextClick}>Next</button>
    </div>
  );
};

export default VehicleSelectionComponent;
