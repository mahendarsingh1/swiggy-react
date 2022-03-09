import React from "react";

function ControlOption(props){

    const { item } = props;
    const { className, img, label, superScript} = item;

    return (
        <div className={`inline control_options ${className}`}>
            <img src={img} alt={label} />
            {label}
            <span>{superScript}</span>
        </div>
    )
}

export default ControlOption;