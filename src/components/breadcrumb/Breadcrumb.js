import React from "react";
import './Breadcrumb.css';

function Breadcrumb(props){

    const { breadcrumbData : {path, target} } = props;

    const breadcrumbPath = path.map(item => <span key={item}>{`${item} /`}</span>)

    return (
        <div className="breadcrumb">
            { breadcrumbPath }
            { target }
        </div>
    )
}

export default Breadcrumb;