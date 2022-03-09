import React from "react";

function SearchBox(props){

    const { item } = props;
    const { className, img, inputClass, inputType, label, inputPlaceholder } = item;

    return(
        <div className={`inline filter-inputs ${className}`}>
            {img && <img src={img} alt={label} />}
            {inputClass && <input className={inputClass} type={inputType} placeholder={inputPlaceholder}/>} 
            {" "}
            {label && label}
        </div>
    )
}

export default SearchBox;