
import { styled } from '@stitches/react';
import { useState, useRef, ReactElement, Children } from 'react';
import { BOX_SIZE } from '../theme/size';

interface RobotProps {
    name: string,
    xPosition: number,
    yPosition: number
}

export default function Draggable( props :any ){
    const droppableZone = useRef<HTMLDivElement>(null);

    const GiveDraggableAttr = (singleElem :ReactElement, idx :number) => {
        const [xPosition, setXPos] = useState<Number>(30);
        const [yPosition, setYPos] = useState<Number>(30);

        const dragStart = (e:any) => {
            console.log('Drag Event Start!');
            const img = new Image();
            e.dataTransfer.setDragImage(img, 0, 0);

            setXPos(e.clientX);
            setYPos(e.clientY);
        };

        const isInDroppableZone = (xPos:number, yPos:number) => {

            const boxSize = parseInt(BOX_SIZE) 
    
            const zoneBoundaryXmin = droppableZone.current?.getBoundingClientRect().left ? droppableZone?.current?.getBoundingClientRect().left : 0
            const zoneBoundaryXmax = droppableZone.current?.getBoundingClientRect().right ? droppableZone?.current?.getBoundingClientRect().right : 0
            const zoneBoundaryYmin = droppableZone.current?.getBoundingClientRect().top ? droppableZone?.current?.getBoundingClientRect().top : 0
            const zoneBoundaryYmax = droppableZone.current?.getBoundingClientRect().bottom ? droppableZone?.current?.getBoundingClientRect().bottom : 0
    
            // if (xPos <= zoneBoundaryXmin){
            //     setXPos(zoneBoundaryXmin);
            //     setYPos(yPos);
            // }else if(xPos + boxSize >= zoneBoundaryXmax){
            //     setXPos(zoneBoundaryXmax - boxSize);
            //     setYPos(yPos);
            // }else if(yPos <= zoneBoundaryYmin){
            //     setYPos(zoneBoundaryYmin);
            //     setXPos(xPos);
            // }else if(yPos + boxSize >= zoneBoundaryYmax){
            //     setYPos(zoneBoundaryYmax - boxSize);
            //     setXPos(xPos);
            // }else{
            //     setXPos(xPos);
            //     setYPos(yPos);
            // }
            if (xPos <= zoneBoundaryXmin){
                setXPos(zoneBoundaryXmin);
                if(yPos <= zoneBoundaryYmin){
                    setYPos(zoneBoundaryYmin);
                }else if(yPos + boxSize >= zoneBoundaryYmax){
                    setYPos(zoneBoundaryYmax - boxSize);
                }else{
                    setYPos(yPos);
                }
            }else if(xPos + boxSize >= zoneBoundaryXmax){
                setXPos(zoneBoundaryXmax - boxSize);
                if(yPos <= zoneBoundaryYmin){
                    setYPos(zoneBoundaryYmin);
                }else if(yPos + boxSize >= zoneBoundaryYmax){
                    setYPos(zoneBoundaryYmax - boxSize);
                }else{
                    setYPos(yPos);
                }
            }else{
                setXPos(xPos);
                if(yPos <= zoneBoundaryYmin){
                    setYPos(zoneBoundaryYmin);
                    console.log("??");
                }else if(yPos + boxSize >= zoneBoundaryYmax){
                    setYPos(zoneBoundaryYmax - boxSize);
                }else{
                    setYPos(yPos);
                }
            }
        };
        
        const handleDrag = (e:any) => {
            console.log(" xPos => ", e.clientX);
            console.log(" YPos => ", e.clientY);
            console.log(" ");

            isInDroppableZone(e.clientX, e.clientY);
        };

        return (
            <MovableRobot key={`Robot_${idx}`} draggable onDragStart={dragStart} onDrag={handleDrag} style={{ left: `${xPosition}px`, top: `${yPosition}px` }} >
                {singleElem}
            </MovableRobot>
        );
    };
        
    const detectDragEnd = (e:any) => {
        console.log(" xPos_Done => ", e.clientX);
        console.log(" YPos_Done => ", e.clientY);
    };

    return(
        <BearRestaurantZone id='droppableZone' onDragEnd={detectDragEnd} ref={droppableZone}>
            { props["children"]?.length > 1 
            ? props["children"].map((child : ReactElement, idx : number) => GiveDraggableAttr(child, idx))
            : props["children"]
            ? GiveDraggableAttr(props["children"], 0)
            : null}
        </BearRestaurantZone>
    );
}

// == styled component == 

const BearRestaurantZone = styled('div',{
    height: '90vh',
    width: '68vw',
    margin: "10%",
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
    backgroundColor: "s",
    borderRadius: '10px',
    position: 'absolute',
    cursor: 'move',
});


            // let {name, xPosition, yPosition} = childrens["children"][i].props;
            // setDraggableInfo([...draggableInfo, {
            // name: name,
            // xPosition: xPosition,
            // yPosition: yPosition
            // }]);