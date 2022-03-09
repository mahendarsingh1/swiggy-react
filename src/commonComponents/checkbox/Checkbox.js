import React from "react";
import PropTypes from 'prop-types'

import './Checkbox.css'

function Checkbox(props){

    const { label } = props;

    return(
        <div className="inline filter-inputs veg-only cursor-pointer">
            <input className="cursor-pointer" type="checkbox" />
            {" "}
            {label}
        </div>
    )
}

Checkbox.propTypes = {
    label : PropTypes.string,
}

Checkbox.defaultProps = {
    label : "Checkbox"
}


export default Checkbox;