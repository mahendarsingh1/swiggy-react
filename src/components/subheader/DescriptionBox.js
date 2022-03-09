import React from "react";

function DescriptionBox(props){

    const { item } = props;
    const { classes, img, heading, paragraph } = item;

    return (
        <div className={classes+' margin-2'}>
            {img && <img src={img} alt={heading}/>}
            <h4 className="inline">{heading}</h4>
            <p className="op-6">{paragraph}</p>
        </div>
    )
}

export default DescriptionBox;