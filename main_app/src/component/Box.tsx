
import { styled } from "@stitches/react";

interface boxProps {
    name: string,
    xPos: number,
    yPos: number
}

const Robot = styled("div",{
    height: "4rem",
    width: "4rem",
    border: "solid 2px blue",
    borderRadius: "10px",
    backgroundColor: "Aquamarine",
    position: "absolute"
});


const dragStart = (e:any) => {
    console.log("Drag Event Start!")
};

const handleDrag = (e:any) => {
    console.log("X: " + e.clientX + " | Y: " + e.clientY)
}


export default function Box({ name, xPos, yPos }:boxProps){
    return(
        <Robot draggable onDragStart={dragStart} onDrag={handleDrag} style={{ left: xPos, top: yPos }}>
            {name}
        </Robot>
    );
}
