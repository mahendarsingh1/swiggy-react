import React from "react";
import FilterInput from './FilterInput'
import inputData from "./constants/inputData";
import './FilterSection.css'

function FilterSection(){
    return (
        <div className="filter-section">
            {
                inputData.map(item =>{
                    return <FilterInput key={item.className} item={item}/>
                })
            }
        </div>
    )
}

export default FilterSection;