
import { styled } from '@stitches/react';
import { BOX_SIZE } from '../theme/size'

interface RobotProps {
    name: string,
    xPosition?: number,
    yPosition?: number
};

export default function Robot({ name, xPosition, yPosition }:RobotProps){

    return(
        <Servi id={name} style={{ left: xPosition, top: yPosition }}>
            {"<" + name + ">"}
        </Servi>
    );
};

const Servi = styled('div',{
    height: `${BOX_SIZE}px`,
    width: BOX_SIZE + 'px',
    // border: 'solid 2px blue',
    borderRadius: '10px',
    background: 'url("/images/servi_pixeled.png")',
    backgroundSize: "60px",
    backgroundPosition: '0% 140%',
    backgroundRepeat: 'no-repeat',
    color: "orange",
    position: 'absolute',
    cursor: 'move',
    transition: 'all 0.75s cubic-bezier(0.28, -0.36, 0.6, 1.1) 0.2s;'
});
