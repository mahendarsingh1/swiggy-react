import React from "react";
import PropTypes from 'prop-types'

import DescriptionBox from '../DescriptionBox/DescriptionBox'

function DescriptionBoxList(props){

    const { restaurantInfo } = props;

    const list = restaurantInfo.map(function getDescriptionBoxFromItem(item){
        return <DescriptionBox key={item.heading} item={item} />;
    })

    return(
        <div className="description-values flex">
            {list}
        </div>
    )
}

DescriptionBoxList.propTypes = {
    restaurantInfo : PropTypes.array
}

DescriptionBoxList.defaultProps = {
    restaurantInfo : []
}

export default DescriptionBoxList;