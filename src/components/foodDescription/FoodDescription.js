// React
import { useMemo, useRef } from "react";

// Libraries
import PropTypes from "prop-types";

// lodash
import _keys from "lodash/keys";
import _toLower from "lodash/toLower";
import _find from "lodash/find";

// components
import Sidebar from "./components/sidebar";
import FoodList from "./components/foodList";

// css
import "./foodDescription.css";

function FoodDescription(props) {
    const { foodList } = props;
    const keys = useMemo(() => _keys(foodList), [foodList]);
    const foodListSectionRefs = useRef([]);

    function setRef(ele) {
        if (!foodListSectionRefs.current.includes(ele)) {
            foodListSectionRefs.current.push(ele);
        }
    }

    function handleCategoryScroll(category) {
        const section = _find(foodListSectionRefs.current, { id: _toLower(category) });
        section.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <div className="flex food-description">
            <Sidebar
                categories={keys}
                handleCategoryScroll={handleCategoryScroll}
            />
            <FoodList foodList={foodList} setRef={setRef} />
        </div>
    );
}

FoodDescription.propTypes = {
    foodList: PropTypes.object,
};

FoodDescription.defaultProps = {
    foodList: {},
};

export default FoodDescription;
