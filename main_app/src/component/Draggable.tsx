
import { styled } from '@stitches/react';
import {useState, useRef, ReactElement, Children} from 'react';
import { BOX_SIZE } from '../theme/size';

interface RobotProps {
    name: string,
    xPosition: number,
    yPosition: number
}

// interface DraggableProps {
//     childrens: ReactElement[] | null
// }

export default function Draggable( childrens :any ){

    // const { name } = children.props | "hello";
    const droppableZone = useRef<HTMLDivElement>(null);
    let draggableElemList: ReactElement[] = [];

    const [draggableInfo, setDraggableInfo] = useState<RobotProps[]>([]);

    const dragStart = (e:any) => {
        console.log('Drag Event Start!');
        console.log(e);
        const img = new Image();
        e.dataTransfer.setDragImage(img, 0, 0);
    };
    
    const handleDrag = (e:any) => {
        console.log(e);
        // setServi({
        //     ...servi,
        //     xPosition: e.clientX,
        //     yPosition: e.clientY
        // });
    };

    const detectDragEnd = (e:any) => {
        // setServi({
        //     ...servi,
        //     xPosition: e.clientX,
        //     yPosition: e.clientY
        // });
        // if (isInDroppableZone(movedServi))
        //     moveBoxCompo(movedServi);
    };

    const giveDraggableAttr = (singleElem :ReactElement) => {
        let {name, xPosition, yPosition} = singleElem.props;

        if ( xPosition == undefined) {
            xPosition = 500;
        }
        if ( yPosition == undefined) {
            yPosition = 500;
        }
        return (
            <MovableRobot className='servi' draggable onDragStart={dragStart} onDrag={handleDrag} style={{ left: xPosition, top: yPosition }} >
                {singleElem}
            </MovableRobot>
        );
    };

    if (childrens["children"]?.length) {
        for (let i = 0; i < childrens["children"].length; i++) {
            // let {name, xPosition, yPosition} = childrens["children"][i].props;
            // setDraggableInfo([...draggableInfo, {
            // name: name,
            // xPosition: xPosition,
            // yPosition: yPosition
            // }]);
            draggableElemList.push(giveDraggableAttr(childrens["children"][i]));
        }
    };

    console.log("=>=>", 
    childrens["children"],
    draggableElemList
    );

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


    return(
        <BearRestaurantZone id='droppableZone' onDragEnd={detectDragEnd} ref={droppableZone}>
            { childrens["children"]?.length > 1 
            ? draggableElemList 
            : childrens["children"]
            ? giveDraggableAttr(childrens["children"])
            : null}
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