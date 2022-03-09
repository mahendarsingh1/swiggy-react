import React from "react";
import PropTypes from 'prop-types'

import './Sidebar.css'

function Sidebar(props){

    const { categories } = props;
    const list = categories.map(function getAnchorListJsxFromCategory(category){
                    return <a key={category} href={`#${category}`}> {category} </a> 
                })

        
    return(
        <div className="overview">
            {list}
        </div>
    )   
}

Sidebar.propTypes = {
    categories : PropTypes.array
}

Sidebar.defaultProps = {
    categories : ['No Items']
}

export default Sidebar;