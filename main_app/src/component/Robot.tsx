
// This file name should be "box", but it has been changed to "Robot", 
// according to the planning direction of the Draggable component.

import { styled } from '@stitches/react';
import { ROBOT_SIZE } from '../theme/size'

// == type setting == 
interface RobotProps {
    name: string,
    xPosition?: number,
    yPosition?: number
};



// == main part == 

export default function Robot({ name, xPosition, yPosition }:RobotProps){
    return(
        <Servi id={name} style={{ left: xPosition, top: yPosition }}>
            {`<${name}>`}
        </Servi>
    );
};



// == styled component == 

const Servi = styled('div',{
    height: `${ROBOT_SIZE}px`,
    width: `${ROBOT_SIZE}px`,
    // border: 'solid 2px blue',
    borderRadius: '10px',
    background: 'url("/images/servi_pixeled.png")',
    backgroundSize: "70px",
    backgroundPosition: '0% 140%',
    backgroundRepeat: 'no-repeat',
    color: "orange",
    position: 'absolute',
    cursor: 'move',
    transition: 'all 0.75s cubic-bezier(0.28, -0.36, 0.6, 1.1) 0.2s;'
});
