
import { styled } from '@stitches/react';
import {useState, useRef, ReactElement} from 'react';
import { BOX_SIZE } from '../theme/size';

interface RobotProps {
    name: string,
    xPosition: number,
    yPosition: number
}

type DraggableProps = {
    children: React.ReactElement[];
}

export default function Draggable( {children}:DraggableProps ){


    const { name } = children[0].props;
    
    const droppableZone = useRef<HTMLDivElement>(null);

    const [servi, setServi] = useState<RobotProps>({name: name, xPosition: 300, yPosition: 900 });

    const giveDraggableAttr: React.FC<DraggableProps["children"][0]> = (raw:ReactElement) => {
        return (
            <MovableRobot className='servi' draggable onDragStart={dragStart} onDrag={handleDrag} style={{ left: servi.xPosition, top: servi.yPosition }} >
                {raw}
            </MovableRobot>
        );
    };

    
    // const droppableZone = useRef<HTMLDivElement>(null);
    // let robotList : React.ReactElement[];


    // for (let i = 0; i < childrens.length; i++){
    //     const { name } = childrens[i].props;

    //     const [servi, setServi] = useState<RobotProps>({name: name, xPosition: 300, yPosition: 900 });

    //     const giveDraggableAttr: React.FC<DraggableProps["children"]> = (raw:ReactElement) => {
    //         return (
    //             <MovableRobot className='servi' draggable onDragStart={dragStart} onDrag={handleDrag} style={{ left: servi.xPosition, top: servi.yPosition }} >
    //                 {raw}
    //             </MovableRobot>
    //         );
    //     };
        
    // }



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
        console.log(servi);
        setServi({
            ...servi,
            xPosition: e.clientX,
            yPosition: e.clientY
        });
    };

    const detectDragEnd = (e:any) => {
        setServi({
            ...servi,
            xPosition: e.clientX,
            yPosition: e.clientY
        });
        // if (isInDroppableZone(movedServi))
        //     moveBoxCompo(movedServi);
    };

    
    return(
        <BearRestaurantZone id='droppableZone' onDragEnd={detectDragEnd} ref={droppableZone}>
            {/* <Box name={servi_1.name} xPosition={servi_1.xPosition} yPosition={servi_1.yPosition} ></Box>
            <Box name={servi_2.name} xPosition={servi_2.xPosition} yPosition={servi_2.yPosition} ></Box>
            <Box name={servi_3.name} xPosition={servi_3.xPosition} yPosition={servi_3.yPosition} ></Box> */}
            {giveDraggableAttr(children[0])}
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

const MovableRobot = styled('div',{
    height: `${BOX_SIZE}px`,
    width: BOX_SIZE + 'px',
    // border: 'solid 2px blue',
    borderRadius: '10px',
    position: 'absolute',
    cursor: 'move',
});


{/* <Servi id={name} draggable  onDragStart={dragStart} onDrag={handleDrag} style={{ left: xPosition, top: yPosition }}>
{"<" + name + ">"}
</Servi> */}