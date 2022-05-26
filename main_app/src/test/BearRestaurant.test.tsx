import React from 'react';
import { render, screen } from '@testing-library/react';
import BearRestaurant from '../BearStudyCafe';

test('renders Robot Name1 \'servi\' ', () => {
  render(<BearRestaurant />);
  const linkElement = screen.getByText(/servi_1/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Robot Name2 \'servi\' ', () => {
  render(<BearRestaurant />);
  const linkElement = screen.getByText(/servi_2/i);
  expect(linkElement).toBeInTheDocument();
});

