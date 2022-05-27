import React from 'react';
import Draggable from './component/Draggable';
import Robot from './component/Robot';

// == main part == 

function BearStudyCafe() {
  return (
    <div className="App">
        <Robot name={"Sleeping..."} />
        <Draggable>
          <Robot name={"Working_Servi"} />
          <Robot name={"CleanUp_Servi"} />
          <Robot name={"Carrying_Servi"} />
          <Robot name={"Bored_Servi"} />
          <div> Nice Music and Coffee Smell.. </div>
        </Draggable>
    </div>
  );
}

export default BearStudyCafe;
