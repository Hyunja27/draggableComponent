import React from 'react';
import Draggable from './component/Draggable';
import Robot from './component/Robot';

// == main part == 

function BearStudyCafe() {
  return (
    <div className="App">
        <Robot name={"Working_Servi"} />
        <Draggable>
          <Robot name={"Recharging..."}/>
          {/* <Robot name={"CleanUp_Servi"} />
          <Robot name={"Carrying_Servi"} />
          <Robot name={"Bored_Servi"} /> */}
        </Draggable>
        <Robot name={"Sleeping..."} />
    </div>
  );
}

export default BearStudyCafe;
