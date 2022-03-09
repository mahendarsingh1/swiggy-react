import React from "react";
import './Overview.css'

function Overview(props){

    const { categories } = props;
        
    return(
        <div className="overview">
            {
                categories.map(category =>  <a key={category} href={`#${category}`}> {category} </a> )
            }
        </div>
    )
    
}

export default Overview;