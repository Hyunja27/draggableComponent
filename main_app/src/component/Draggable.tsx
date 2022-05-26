
import { styled } from '@stitches/react';
import { useState, useRef, ReactElement } from 'react';
import { ROBOT_SIZE, ZONE_HEIGHT, ZONE_WIDTH } from '../theme/size';

//	== Simple Flow ==
//	1. check the children presence (91 - 97)
// 	2. if it has children, give Draggable attibute.(22 - 98)
// 		-> give kind of dragAPIs. (62 - 81)
// 		-> check the zone Size, and restrict moving. (26 - 60)
//	3. rendering BearStudyCafe, with movable Servi :)


// == main part == 

export default function Draggable( props :any ){
  const droppableZone = useRef<HTMLDivElement>( null );

  const GiveDraggableAttr = ( singleElem :ReactElement, idx :number ) => {
    const [xPosition, setXPos] = useState<Number>(100 + idx * 10);
    const [yPosition, setYPos] = useState<Number>(100 + idx * 10);

    const isInDroppableZone = ( xPos:number, yPos:number ) => {
      const zoneBoundaryXmin = droppableZone.current?.getBoundingClientRect().left ? droppableZone?.current?.getBoundingClientRect().left : 0
      const zoneBoundaryXmax = droppableZone.current?.getBoundingClientRect().right ? droppableZone?.current?.getBoundingClientRect().right : 0
      const zoneBoundaryYmin = droppableZone.current?.getBoundingClientRect().top ? droppableZone?.current?.getBoundingClientRect().top : 0
      const zoneBoundaryYmax = droppableZone.current?.getBoundingClientRect().bottom ? droppableZone?.current?.getBoundingClientRect().bottom : 0

      if ( xPos <= zoneBoundaryXmin ){
        setXPos(zoneBoundaryXmin);
        if( yPos <= zoneBoundaryYmin ){
          setYPos(zoneBoundaryYmin);
        }else if( yPos + ROBOT_SIZE >= zoneBoundaryYmax ){
          setYPos(zoneBoundaryYmax - ROBOT_SIZE);
        }else{
          setYPos(yPos);
        }
      }else if( xPos + ROBOT_SIZE >= zoneBoundaryXmax ){
        setXPos(zoneBoundaryXmax - ROBOT_SIZE);
        if( yPos <= zoneBoundaryYmin ){
          setYPos(zoneBoundaryYmin);
        }else if( yPos + ROBOT_SIZE >= zoneBoundaryYmax ){
          setYPos(zoneBoundaryYmax - ROBOT_SIZE);
        }else{
          setYPos(yPos);
        }
      }else{
        setXPos(xPos);
        if( yPos <= zoneBoundaryYmin ){
          setYPos(zoneBoundaryYmin);
        }else if( yPos + ROBOT_SIZE >= zoneBoundaryYmax ){
          setYPos(zoneBoundaryYmax - ROBOT_SIZE);
        }else{
          setYPos(yPos);
        }
      };
    };

		const dragStart = (e:any) => {
      const img = new Image();
      e.dataTransfer.setDragImage(img, 0, 0);
      setXPos(e.clientX);
      setYPos(e.clientY);
    };
    
    const handleDrag = ( e:any ) => {
      if (!e.clientX && !e.clientY) {
        return ;
        }
      isInDroppableZone(e.clientX, e.clientY);
      e.preventDefault();
    };

    const detectDragEnd = ( e:any ) => {
      console.log(" xPos_Done => ", e.clientX);
      console.log(" YPos_Done => ", e.clientY);
      isInDroppableZone(e.clientX, e.clientY);
    };

    return (
      <MovableRobot key={`Robot_${idx}`} draggable onDragStart={dragStart} onDrag={handleDrag} onDragEnd={detectDragEnd} style={{ left: `${xPosition}px`, top: `${yPosition}px` }} >
        {singleElem}
      </MovableRobot>
    );
  };

  return(
    <BearStudyCafeZone id='droppableZone' ref={droppableZone}>
      { props["children"]?.length > 1 
      ? props["children"].map((child : ReactElement, idx : number) => GiveDraggableAttr(child, idx))
      : props["children"]
      ? GiveDraggableAttr(props["children"], 0)
      : null}
    </BearStudyCafeZone>
  );
}

// == styled component == 

const BearStudyCafeZone = styled('div',{
  height: `${ZONE_HEIGHT}vh`,
  width: `${ZONE_WIDTH}vw`,
  margin: "5%",
  border: 'solid 3px black',
  borderRadius: '20px',
  backgroundColor: 'red',
  background: 'url("/images/clusterMap2.png")',
  backgroundSize: "1200px"
});

const MovableRobot = styled('div',{
  height: `${ROBOT_SIZE}px`,
  width: ROBOT_SIZE + 'px',
  backgroundColor: "s",
  borderRadius: '10px',
  position: 'absolute',
  cursor: 'move'
});
