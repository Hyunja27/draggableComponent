
import Box from './Box';
import { styled } from '@stitches/react';
import {useState, useRef} from 'react';
import { BOX_SIZE } from '../theme/size';

interface boxProps {
    name: string,
    xPos: number,
    yPos: number
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

export default function Draggable(){
    const [servi_1_pos, setServi_1_pos] = useState<boxProps>({name: 'servi_1', xPos: 120, yPos:150});
    const [servi_2_pos, setServi_2_pos] = useState<boxProps>({name: 'servi_2', xPos: 20, yPos:480});
    const [servi_3_pos, setServi_3_pos] = useState<boxProps>({name: 'servi_3', xPos: 970, yPos:120});

    const droppableZone = useRef<HTMLInputElement>(null);

    const isInDroppableZone = (data:boxProps) => {
        const {name, xPos, yPos} = data;
        const boxSize = parseInt(BOX_SIZE) 

        const zoneBoundaryXmin = droppableZone?.current?.getBoundingClientRect().left ? droppableZone?.current?.getBoundingClientRect().left : 0
        const zoneBoundaryXmax = droppableZone?.current?.getBoundingClientRect().right ? droppableZone?.current?.getBoundingClientRect().right : 0
        const zoneBoundaryYmin = droppableZone?.current?.getBoundingClientRect().top ? droppableZone?.current?.getBoundingClientRect().top : 0
        const zoneBoundaryYmax = droppableZone?.current?.getBoundingClientRect().bottom ? droppableZone?.current?.getBoundingClientRect().bottom : 0

        // if (xPos + boxSize <= zoneBoundaryXmin || xPos + boxSize >= zoneBoundaryXmax){
        //     console.log(`beeeep! ${name}'s x is outed!`);
        //     console.log(`${name}'s x: ${xPos}, ${zoneBoundaryXmin} | ${zoneBoundaryXmax}`);
        // }
        // if (yPos + boxSize <= zoneBoundaryYmin || yPos + boxSize >= zoneBoundaryYmax){
        //     console.log(`beeeep! ${name}' y is outed!`);
        //     console.log(`${name}'s Y: ${xPos}, ${zoneBoundaryYmin} | ${zoneBoundaryYmax}`);
        // }

        if (xPos + boxSize <= zoneBoundaryXmin 
            || xPos + boxSize >= zoneBoundaryXmax 
            || yPos + boxSize <= zoneBoundaryYmin 
            || yPos + boxSize >= zoneBoundaryYmax){
            console.log(`beeeep! ${name}' is moveOut!`);
            return false;
        }

        return true;
    }

    const moveBoxCompo = (data:boxProps) => {
        const {name, xPos, yPos} = data
    
        if (name === 'servi_1'){
            setServi_1_pos({
                ...servi_1_pos,
                xPos: xPos,
                yPos: yPos
            })
        }
        else if(name === 'servi_2'){
            setServi_2_pos({
                ...servi_2_pos,
                xPos: xPos,
                yPos: yPos
            })
        }
        else if(name === 'servi_3'){
            setServi_3_pos({
                ...servi_3_pos,
                xPos: xPos,
                yPos: yPos
            })
        }
    };
    
    const detectDragEnd = (e:any) => {
        const movedServi = {
            name: e.target.id,
            xPos: e.clientX,
            yPos: e.clientY
        }
        if (isInDroppableZone(movedServi))
            moveBoxCompo(movedServi);
    };
    
    return(
        <BearRestaurantZone id='droppableZone' onDragEnd={detectDragEnd} ref={droppableZone}>
            <Box name={servi_1_pos.name} xPos={servi_1_pos.xPos} yPos={servi_1_pos.yPos} ></Box>
            <Box name={servi_2_pos.name} xPos={servi_2_pos.xPos} yPos={servi_2_pos.yPos} ></Box>
            <Box name={servi_3_pos.name} xPos={servi_3_pos.xPos} yPos={servi_3_pos.yPos} ></Box>
        </BearRestaurantZone>
    );
}
