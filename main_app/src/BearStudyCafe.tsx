import React from 'react';
import Draggable from './component/Draggable';
import Box from './component/Robot';

// == main part == 

function BearStudyCafe() {
  return (
    <div className="App">
        <Box name={"Recharging..."}/>
        <Draggable>
          <Box name={"Working_Servi"} />
          <Box name={"CleanUp_Servi"} />
          <Box name={"Carrying_Servi"} />
          <Box name={"Bored_Servi"} />
        </Draggable>
        <Box name={"Sleeping..."}/>
    </div>
  );
}

export default BearStudyCafe;
