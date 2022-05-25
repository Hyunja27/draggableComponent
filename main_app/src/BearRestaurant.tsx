import React from 'react';
import Draggable from './component/Draggable';
import Box from './component/Robot';

function BearRestaurant() {
  
  return (
    <div className="App">
        <Draggable>
          <Box name={"I'm Draggable1"} xPosition={100} yPosition={200}/>
        </Draggable>
        <Box name={"I'm Not Draggable"} xPosition={700} yPosition={200}/>
    </div>
  );
}

export default BearRestaurant;
