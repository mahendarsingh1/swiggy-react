// Libraries
import PropTypes from "prop-types";

// components
import FoodListSection from "../foodListSection";

// lodash
import _map from "lodash/map";
import _startCase from "lodash/startCase";
import _noop from 'lodash/noop'

// css
import "./foodList.css";


const renderFoodListSection = (setRef) => (items, category) =>{
    return (
        <FoodListSection
            key={category}
            heading={_startCase(category)}
            items={items}
            setRef={setRef}
        />
    );
}

function FoodList(props){

    const { foodList, setRef } = props;
    
    const foodListSections = _map(foodList, renderFoodListSection(setRef))
    
    return(
        <div className="food-list op-9">
            {foodListSections}
        </div>
    )
}

FoodList.propTypes = {
    foodList : PropTypes.object,
    setRef : PropTypes.func
}

FoodList.deaultProps = {
    foodList : {},
    setRef : _noop
}

export default FoodList;
