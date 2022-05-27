import React from 'react';
import { render, screen } from '@testing-library/react';
import BearStudyCafe from '../BearStudyCafe';
import Robot from '../component/Robot';
import Draggable from '../component/Draggable';



test('[Basic Render Test _ Robot]  is \'Robot\' component has proper name?', () => {
  render(<Robot  name={"testName"}/>);
  const linkElement = screen.getByText(/testName/i);
  expect(linkElement).toBeInTheDocument();
});

// test('[Basic Render Test _ Robot]  seperated single \'Robot\' component is not Draggable?', () => {
//   render(<Robot  name={"testName"}/>);
//   const linkElement = screen.getByText(/testName/i);
//   expect(linkElement).toHaveFormValues('name');
// });

test('[Basic Render Test _ Robot]  if it has starting Position, is \'Robot\' component render normally?', () => {
  render(<Robot  name={"testName"} xPosition={1050} yPosition={200}/>);
  const linkElement = screen.getByText(/testName/i);
  expect(linkElement).toBeInTheDocument();
});

test('[Basic Render Test _ Robot]  \'Robot\' component in \'Draggable\' is render normally?', () => {
  render(
    <Draggable>
      <Robot  name={"testName"}/>
    </Draggable>
  );
  const linkElement = screen.getByTestId("movablerobot")
  expect(linkElement).toBeInTheDocument();
});

test('[Basic Render Test _ Robot]  \'Robot\' component in \'Draggable\' has Draggable ?', () => {
  render(
    <Draggable>
      <Robot  name={"testName"}/>
    </Draggable>
  );
  const linkElement = screen.getByTestId("movablerobot")
  console.log(linkElement)
  expect(linkElement).toHaveProperty('draggable');
});

// test('renders Robot Name1 \'servi\' ', () => {
//   render(<BearRestaurant />);
//   const linkElement = screen.getByText(/servi_1/i);
//   expect(linkElement).toBeInTheDocument();
// });

// test('renders Robot Name2 \'servi\' ', () => {
//   render(<BearRestaurant />);
//   const linkElement = screen.getByText(/servi_2/i);
//   expect(linkElement).toBeInTheDocument();
// });

