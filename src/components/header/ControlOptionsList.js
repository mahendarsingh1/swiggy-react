import React from "react";
import ControlOption from "./ControlOption";
import './ControlOptionsList.css'


function ControlOptionsList(props){

    const { controlOptionsData } = props;

    const list = controlOptionsData.map((item)=>{
                    return <ControlOption key={item.label} item={item} />
                })

    return (
        <>
            {list}
        </>
    )
}

export default ControlOptionsList;