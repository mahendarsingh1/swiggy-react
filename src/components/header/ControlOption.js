import React from "react";

function ControlOption(props){

    const { item : {className, img, label, superScript} } = props;

    return (
        <div className={`inline control_options cursor-pointer ${className}`}>
            <img src={img} alt={label} />
            {label}
            {superScript && <span>{superScript}</span>}
        </div>
    )
}

export default ControlOption;