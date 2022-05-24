import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders Robot Name \'fred\' ', () => {
  render(<App />);
  const linkElement = screen.getByText(/fred/i);
  expect(linkElement).toBeInTheDocument();
});
