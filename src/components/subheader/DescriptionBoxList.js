import React from "react";
import DescriptionBox from './DescriptionBox'
import restaurantInfo from './constants/restaurantInfo'

function DescriptionBoxList(){
    return(
        <>
            {restaurantInfo.map(item =>{
                return <DescriptionBox key={item.heading} item={item} />
            })}
        </>
    )
}

export default DescriptionBoxList;