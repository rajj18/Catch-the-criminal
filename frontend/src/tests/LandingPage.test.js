import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import LandingPage from '../components/LandingPage';
import '@testing-library/jest-dom'

test('renders landing page with start button', () => {
  const mockButtonClick = jest.fn();
  render(<LandingPage onButtonClick={mockButtonClick} />);
  const startButton = screen.getByText('Start');
  expect(startButton).toBeInTheDocument();
  
  fireEvent.click(startButton);
  expect(mockButtonClick).toHaveBeenCalledTimes(1);
});
