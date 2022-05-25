
import Box from './Robot';
import { styled } from '@stitches/react';
import {useState, useRef, RefObject, ReactNode} from 'react';
import { BOX_SIZE } from '../theme/size';

interface RobotProps {
    name: string,
    xPosition: number,
    yPosition: number
}

type DraggableProps = {
    children: React.ReactNode; 
}

export default function Draggable( {children}:DraggableProps ){

    const droppableZone = useRef<HTMLDivElement>(null);

    const [servi_1, setServi_1] = useState<RobotProps>({name: 'servi_1', xPosition: 120, yPosition:150 });
    const [servi_2, setServi_2] = useState<RobotProps>({name: 'servi_2', xPosition: 20, yPosition:480 });
    const [servi_3, setServi_3] = useState<RobotProps>({name: 'servi_3', xPosition: 970, yPosition:120 });


    const giveDraggableAttr = (children:DraggableProps) => {
        return (
            <div draggable  onDragStart={dragStart} onDrag={handleDrag}>
                {children.children}
            </div>
        );
    };

    const isInDroppableZone = (data:RobotProps) => {
        const {name, xPosition, yPosition} = data;
        const boxSize = parseInt(BOX_SIZE) 

        const zoneBoundaryXmin = droppableZone?.current?.getBoundingClientRect().left ? droppableZone?.current?.getBoundingClientRect().left : 0
        const zoneBoundaryXmax = droppableZone?.current?.getBoundingClientRect().right ? droppableZone?.current?.getBoundingClientRect().right : 0
        const zoneBoundaryYmin = droppableZone?.current?.getBoundingClientRect().top ? droppableZone?.current?.getBoundingClientRect().top : 0
        const zoneBoundaryYmax = droppableZone?.current?.getBoundingClientRect().bottom ? droppableZone?.current?.getBoundingClientRect().bottom : 0

        if (xPosition + boxSize <= zoneBoundaryXmin 
            || xPosition + boxSize >= zoneBoundaryXmax 
            || yPosition + boxSize <= zoneBoundaryYmin 
            || yPosition + boxSize >= zoneBoundaryYmax){
            console.log(`beeeep! ${name}' is moveOut!`);
            return false;
        }

        return true;
    }

    // const moveBoxCompo = (data:RobotProps) => {
    //     const {name, xPosition, yPosition} = data
    
    //     if (name === 'servi_1'){
    //         setServi_1({
    //             ...servi_1,
    //             xPosition: xPosition,
    //             yPosition: yPosition
    //         })
    //     }
    //     else if(name === 'servi_2'){
    //         setServi_2({
    //             ...servi_2,
    //             xPosition: xPosition,
    //             yPosition: yPosition
    //         })
    //     }
    //     else if(name === 'servi_3'){
    //         setServi_3({
    //             ...servi_3,
    //             xPosition: xPosition,
    //             yPosition: yPosition
    //         })
    //     }
    // };

    const dragStart = (e:any) => {
        console.log('Drag Event Start!');
        console.log(e);
        const img = new Image();
        e.dataTransfer.setDragImage(img, 0, 0);
    };
    
    const handleDrag = (e:any) => {
        console.log('X: ' + e.clientX + ' | Y: ' + e.clientY);
    };
    
    const detectDragEnd = (e:any) => {
        console.log(e)
        const movedServi = {
            name: e.target.id,
            xPosition: e.clientX,
            yPosition: e.clientY,
            ref: e
        }
        // if (isInDroppableZone(movedServi))
        //     moveBoxCompo(movedServi);
    };
    
    return(
        <BearRestaurantZone id='droppableZone' onDragEnd={detectDragEnd} ref={droppableZone}>
            {/* <Box name={servi_1.name} xPosition={servi_1.xPosition} yPosition={servi_1.yPosition} ></Box>
            <Box name={servi_2.name} xPosition={servi_2.xPosition} yPosition={servi_2.yPosition} ></Box>
            <Box name={servi_3.name} xPosition={servi_3.xPosition} yPosition={servi_3.yPosition} ></Box> */}
            {giveDraggableAttr(children)}
        </BearRestaurantZone>
    );
}

const BearRestaurantZone = styled('div',{
    height: '90vh',
    width: '68vw',
    border: 'solid 3px black',
    borderRadius: '20px',
    backgroundColor: 'red',
    background: 'url("/images/clusterMap2.png")',
    backgroundSize: "1200px"
});

{/* <Servi id={name} draggable  onDragStart={dragStart} onDrag={handleDrag} style={{ left: xPosition, top: yPosition }}>
{"<" + name + ">"}
</Servi> */}