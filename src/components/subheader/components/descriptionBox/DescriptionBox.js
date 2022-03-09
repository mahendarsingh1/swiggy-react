import React from "react";
import PropTypes from 'prop-types'

import descriptionBoxReader from "../../readers/descriptionBoxReader";

import starIcon from '../../../../assests/images/star.svg'

function getImg(imgProp){
    if(imgProp) return <img src={starIcon} alt="star"/>;
    return null;
}

function DescriptionBox(props){

    const { item } = props;

    const classes = descriptionBoxReader.classes(item);
    const img = descriptionBoxReader.img(item);
    const heading = descriptionBoxReader.heading(item);
    const paragraph = descriptionBoxReader.paragraph(item);

    return (
        <div className={`${classes} margin-2-percent`}>
            {getImg(img)}
            {" "}
            <h4 className="inline">{heading}</h4>
            <p className="op-6">{paragraph}</p>
        </div>
    )
}

DescriptionBox.propTypes = {
    item : PropTypes.shape({
        classes : PropTypes.string,
        img : PropTypes.string,
        heading : PropTypes.string,
        paragraph : PropTypes.string
    })
}

DescriptionBox.defaultProps = {
    item : {
        heading : 'heading',
        paragraph : 'paragraph'
    }
}


export default DescriptionBox;