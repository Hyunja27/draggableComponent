
import { styled } from '@stitches/react';
import { useState, useRef, ReactElement } from 'react';
import { ROBOT_SIZE, ZONE_HEIGHT, ZONE_WIDTH } from '../theme/size';

//	== Simple Flow ==
//	1. check the children presence (75 - 79)
// 	2. if it has children, give Draggable attibute.(19 - 70)
// 		-> give kinds of dragAPI. (47 - 63)
// 		-> check the zone Size, and restrict moving. (24 - 45)
//	3. rendering BearStudyCafe, with movable Servi :)


// == main part == 

export default function Draggable( { children } : { children: ReactElement | ReactElement[] | undefined } ){
  const droppableZone = useRef<HTMLDivElement>( null );

  const GiveDraggableAttr = ( singleElem :ReactElement, idx :number ) => {
    const [xPosition, setXPos] = useState<Number>(160 + idx * 70);
    const [yPosition, setYPos] = useState<Number>(440 + idx * 30);
    const [gap, setGap] = useState([0,0]);

    const isInDroppableZone = ( xPos:number, yPos:number ) => {
      const zoneBoundaryXmin = droppableZone.current?.getBoundingClientRect().left ? droppableZone?.current?.getBoundingClientRect().left : 0
      const zoneBoundaryXmax = droppableZone.current?.getBoundingClientRect().right ? droppableZone?.current?.getBoundingClientRect().right : 0
      const zoneBoundaryYmin = droppableZone.current?.getBoundingClientRect().top ? droppableZone?.current?.getBoundingClientRect().top : 0
      const zoneBoundaryYmax = droppableZone.current?.getBoundingClientRect().bottom ? droppableZone?.current?.getBoundingClientRect().bottom : 0

      if( yPos - gap[1] <= zoneBoundaryYmin ){
        setYPos( zoneBoundaryYmin );
      }else if( yPos + ROBOT_SIZE - gap[1] >= zoneBoundaryYmax ){
        setYPos( zoneBoundaryYmax - ROBOT_SIZE );
      }else{
        setYPos( yPos - gap[1] );
      };

      if( xPos - gap[0] <= zoneBoundaryXmin ){
        setXPos( zoneBoundaryXmin );
      }else if( xPos + ROBOT_SIZE - gap[0] >= zoneBoundaryXmax ){
        setXPos( zoneBoundaryXmax - ROBOT_SIZE );
      }else{
        setXPos( xPos - gap[0] );
      };
    };

		const handleDragStart = ( e:any ) => {
      const img = new Image();
      e.dataTransfer.setDragImage(img, 0, 0);
      setGap([e.clientX - Number(xPosition), e.clientY - Number(yPosition)]);
    };
    
    const handleDraging = ( e:any ) => {
      if (!e.clientX && !e.clientY) {
        return ;
        }
      isInDroppableZone(e.clientX, e.clientY);
    };

    const handleDragEnd = ( e:any ) => {
      isInDroppableZone(e.clientX, e.clientY);
    };

    return (
      <MovableRobot data-testid="movablerobot" key={`Robot_${idx}`} draggable onDragStart={handleDragStart} onDrag={handleDraging} onDragEnd={handleDragEnd} style={{ left: `${xPosition}px`, top: `${yPosition}px` }} >
        {singleElem}
      </MovableRobot>
    );
  };

  return(
    <BearStudyCafeZone data-testid="draggablezone" id='droppableZone' ref={droppableZone}>
      {
        children 
        ? Array.isArray(children)
        ? children?.map((child : ReactElement, idx : number) => GiveDraggableAttr(child, idx)) 
        : GiveDraggableAttr(children, 0)
        : null
      }
    </BearStudyCafeZone>
  );
}

// == styled component == 

const BearStudyCafeZone = styled('div',{
  height: `${ZONE_HEIGHT}vh`,
  width: `${ZONE_WIDTH}vw`,
  margin: "5%",
  marginLeft: "7%",
  border: 'solid 3px black',
  borderRadius: '20px',
  backgroundColor: 'red',
  background: 'url("/images/clusterMap2.png")',
  backgroundSize: "1100px"
});

const MovableRobot = styled('div',{
  height: `${ROBOT_SIZE}px`,
  width:`${ROBOT_SIZE}px`,
  backgroundColor: "s",
  borderRadius: '10px',
  position: 'absolute',
  cursor: 'move'
});
