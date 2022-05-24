
import { styled } from '@stitches/react';
import { BOX_SIZE } from '../theme/size'

interface boxProps {
    name: string,
    xPos: number,
    yPos: number
}

const Robot = styled('div',{
    height: BOX_SIZE + 'px',
    width: BOX_SIZE + 'px',
    // border: 'solid 2px blue',
    borderRadius: '10px',
    backgroundColor: 'Aquamarine',
    background: 'url("/images/servi_pixeled.png")',
    backgroundSize: "60px",
    backgroundPosition: '0% 140%',
    backgroundRepeat: 'no-repeat',
    color: "orange",
    position: 'absolute',
    cursor: 'move',
    transition: 'all 0.75s cubic-bezier(0.28, -0.36, 0.6, 1.1) 0.2s;'
});

const dragStart = (e:any) => {
    console.log('Drag Event Start!');
    console.log(e);
    // const img = new Image();
    // e.dataTransfer.setDragImage(img, 0, 0);
};

const handleDrag = (e:any) => {
    console.log('X: ' + e.clientX + ' | Y: ' + e.clientY);
}


export default function Box({ name, xPos, yPos }:boxProps){
    return(
        <Robot id={name} draggable  onDragStart={dragStart} onDrag={handleDrag} style={{ left: xPos, top: yPos }}>
            {name}
        </Robot>
    );
}
