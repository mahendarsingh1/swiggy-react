import React from "react";
import DescriptionBoxList from "./DescriptionBoxList";
import DescriptionText from "./DescriptionText";
import './Description.css'


function Description(){
    return (
        <div className="description inline">
            <DescriptionText />
            <div className="description-values flex">
                <DescriptionBoxList />
            </div>
        </div>
    )
}

export default Description;