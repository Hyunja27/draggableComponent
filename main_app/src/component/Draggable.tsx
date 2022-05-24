
import Box from "./Box";
import { styled } from "@stitches/react";
import { useEffect, useState } from "react";

interface boxPos {
    xPos: number,
    yPos: number
}

const BearRestaurant = styled("div",{
    height: "100vh",
    width: "100vh",
    border: "solid 3px black",
    borderRadius: "20px",
    backgroundColor: "red",
    // position: "absolute"
});

const detectDragEnd = (e:any) => {
    console.log("Drag Ended!")
};



export default function Draggable(){
    const [servi_1_pos, setServi_1_pos] = useState<boxPos>({xPos: 20, yPos:50});
    const [servi_2_pos, setServi_2_pos] = useState<boxPos>({xPos: 20, yPos:600});
    const [servi_3_pos, setServi_3_pos] = useState<boxPos>({xPos: 280, yPos:200});

    return(
        <BearRestaurant>
            This is basic Draggable field.
            <Box name="servi1" xPos={servi_1_pos.xPos} yPos={servi_1_pos.yPos} ></Box>
            <Box name="servi2" xPos={servi_2_pos.xPos} yPos={servi_2_pos.yPos} ></Box>
            <Box name="servi3" xPos={servi_3_pos.xPos} yPos={servi_3_pos.yPos} ></Box>
        </BearRestaurant>
    );
}
