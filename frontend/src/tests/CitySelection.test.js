import React from "react";
import { render, screen } from "@testing-library/react";
import CitySelectionComponent from "../components/CitySelection";
import "@testing-library/jest-dom";

test("renders city selection component with select dropdowns", () => {
  const mockCityChange = jest.fn();
  const mockNextButtonClick = jest.fn();
  const cops = [
    { id: 1, name: "Cop 1" },
    { id: 2, name: "Cop 2" },
  ];
  const selectedCity = {
    1: ["Lihaspur", "50"],
    2: ["Narmis City", "40"],
    3: ["Shekharvati", "30"],
  };
  let cities = [
    { name: 'Yapkashnagar', distance: 60 },
    { name: 'Lihaspur', distance: 50 },
    { name: 'Narmis City', distance: 40 },
    { name: 'Shekharvati', distance: 30 },
    { name: 'Nuravgram', distance: 20 }
  ];
  render(
    <CitySelectionComponent
      cops={cops}
      cities={cities}
      selectedCity={selectedCity}
      handleCityChange={mockCityChange}
      onNextButtonClick={mockNextButtonClick}
    />
  );
  const selectDropdowns = screen.getAllByRole("combobox");
  expect(selectDropdowns.length).toBe(cops.length);
});
