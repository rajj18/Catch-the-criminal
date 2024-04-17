import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import ResultPage from '../components/ResultPage';
import '@testing-library/jest-dom'

test('renders result page with correct message and reset button when fugitive is captured', () => {
  const mockReset = jest.fn();
  const capturedBy = { name: 'Cop 1' };
  render(<ResultPage captureStatus={true} capturedBy={capturedBy} onReset={mockReset} />);
  const capturedMessage = screen.getByText('Fugitive captured by Cop 1');
  const resetButton = screen.getByText('Reset');
  expect(capturedMessage).toBeInTheDocument();
  expect(resetButton).toBeInTheDocument();
  
  fireEvent.click(resetButton);
  expect(mockReset).toHaveBeenCalledTimes(1);
});

test('renders result page with correct message when fugitive is not captured', () => {
  render(<ResultPage captureStatus={false} />);
  const notCapturedMessage = screen.getByText('Fugitive not captured.');
  expect(notCapturedMessage).toBeInTheDocument();
});
