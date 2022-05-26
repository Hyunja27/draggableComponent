import React from 'react';
import Draggable from './component/Draggable';
import Box from './component/Robot';

// == main part == 

function BearStudyCafe() {
  return (
    <div className="App">
        <Draggable>
          {/* <Box name={"I'm Draggable1"} /> */}
          {/* <Box name={"I'm Draggable2"} /> */}
          {/* <Box name={"I'm Draggable3"} /> */}
          {/* <Box name={"I'm Not Draggable"} xPosition={700} yPosition={200}/> */}
        </Draggable>
        <Box name={"I'm Not Draggable"} xPosition={1050} yPosition={150}/>
    </div>
  );
}

export default BearStudyCafe;
