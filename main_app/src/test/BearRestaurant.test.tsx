import React from 'react';
import { render, screen } from '@testing-library/react';
import BearStudyCafe from '../BearStudyCafe';
import Robot from '../component/Robot';
import Draggable from '../component/Draggable';

test('[Basic Render Test _ Robot]  is \'Robot\' component render with proper name?', () => {
  render(<Robot  name={"testName"}/>);
  const linkElement = screen.getByText(/testName/i);
  expect(linkElement).toBeInTheDocument();
});

test('[Basic Render Test _ Robot]  if it has starting Position, is \'Robot\' component render normally?', () => {
  render(<Robot  name={"testName"} xPosition={1050} yPosition={200}/>);
  const linkElement = screen.getByText(/testName/i);
  expect(linkElement).toBeInTheDocument();
});
test('[Basic Render Test _ Draggable] is \'Draggable\' component render with No children component normally?', () => {
  render(<Draggable>
  </Draggable>);
  const linkElement = screen.getByTestId("draggablezone")
  expect(linkElement).toBeInTheDocument();
});

test('[Basic Render Test _ Draggable] is \'Draggable\' component render with single children component normally?', () => {
  render(<Draggable>
    <Robot  name={"testName"}/>
  </Draggable>);
  const linkElementDraggable = screen.getByTestId("draggablezone")
  const linkElementRobot = screen.getByText(/testName/i);
  expect(linkElementDraggable).toBeInTheDocument();
  expect(linkElementRobot).toBeInTheDocument();
});

test('[Basic Render Test _ Draggable] is \'Draggable\' component render with multiple children component normally?', () => {
  render(<Draggable>
    <Robot  name={"testName1"}/>
    <Robot  name={"testName2"}/>
    <Robot  name={"testName3"}/>
    <Robot  name={"testName4"}/>
    <Robot  name={"testName5"}/>
  </Draggable>);
  const linkElementDraggable = screen.getByTestId("draggablezone")
  const linkElementRobot1 = screen.getByText(/testName1/i);
  const linkElementRobot2 = screen.getByText(/testName2/i);
  const linkElementRobot3 = screen.getByText(/testName3/i);
  const linkElementRobot4 = screen.getByText(/testName4/i);
  const linkElementRobot5 = screen.getByText(/testName5/i);

  expect(linkElementDraggable).toBeInTheDocument();
  expect(linkElementRobot1).toBeInTheDocument();
  expect(linkElementRobot2).toBeInTheDocument();
  expect(linkElementRobot3).toBeInTheDocument();
  expect(linkElementRobot4).toBeInTheDocument();
  expect(linkElementRobot5).toBeInTheDocument();
});


test('[Draggable Test _ Robot]  seperated single \'Robot\' component is not Draggable?', () => {
  render(<Robot  name={"testName"}/>);
  const linkElement = screen.getByText(/testName/i);
  expect(linkElement.draggable).toBe(false)
});

test('[Draggable Test _ Robot]  \'Robot\' component in \'Draggable\' is render normally?', () => {
  render(
    <Draggable>
      <Robot  name={"testName"}/>
    </Draggable>
  );
  const linkElement = screen.getByTestId("movablerobot")
  expect(linkElement).toBeInTheDocument();
});

test('[Draggable Test _ Robot]  \'Robot\' component in \'Draggable\' has Draggable ?', () => {
  render(
    <Draggable>
      <Robot  name={"testName"}/>
    </Draggable>
  );
  const linkElement = screen.getByTestId("movablerobot")
  expect(linkElement.draggable).toBe(true)
});
