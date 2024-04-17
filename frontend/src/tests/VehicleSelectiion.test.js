import React from 'react';
import { render, screen } from '@testing-library/react';
import VehicleSelectionComponent from '../components/VehicleSelection';
import '@testing-library/jest-dom'

test('renders vehicle selection component with select dropdowns', () => {
  const mockVehicleChange = jest.fn();
  const mockNextButtonClick = jest.fn();
  const cops = [{ id: 1, name: 'Cop 1' }, { id: 2, name: 'Cop 2' }];
  const selectedCities = [['Narmis City', 40], ['Lihaspur', 50] ,['Shekharvati', 30]]
  const vehicles = [
    { kind: 'EV Bike', range: 60, count: 2 },
    { kind: 'EV Car', range: 100, count: 1 }
  ];
  render(
    <VehicleSelectionComponent
      cops={cops}
      selectedCities={selectedCities}
      vehicles={vehicles}
      handleVehicleChange={mockVehicleChange}
      onNextButtonClick={mockNextButtonClick}
    />
  );
  const selectDropdowns = screen.getAllByRole('combobox');
  expect(selectDropdowns.length).toBe(cops.length);
});
