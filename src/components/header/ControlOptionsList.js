import React from "react";
import ControlOption from "./ControlOption";
import controlOptionsData from "./constants/controlOptionsData";
import './ControlOptionsList.css'

function ControlOptionsList(){
    return (
        <>
            {controlOptionsData.map((item)=>{
                return <ControlOption key={item.label} item={item} />
            })}
        </>
    )
}

export default ControlOptionsList;