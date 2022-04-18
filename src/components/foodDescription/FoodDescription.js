// React
import { useMemo, useRef, useState } from "react";

// Libraries
import React from "react";
import PropTypes from "prop-types";

// lodash
import _keys from "lodash/keys";
import _toLower from "lodash/toLower";
import _isEmpty from "lodash/isEmpty";
import _find from "lodash/find";

// components
import Sidebar from "./components/sidebar";
import FoodList from "./components/foodList";
import Cart from "../cart";
import IconWithLabel from "../../commonComponents/iconWithLabel";

// helpers
import {
    getCartItems,
    getTotalFromCartItems,
    incrementQuantity,
    decrementQuantity
} from "./helpers/foodDescription.general";

// constants
import {
    CART_ITEMS,
    EMPTY_CART_DESCRIPTION,
} from "./constants/foodDescription.general";

// utility
import saveToLocalStorage from "../../utility/saveToLocalStorage";

// icons
import emptyCartImage from "../../assets/images/cartEmpty.webp";

// css
import "./foodDescription.css";

function FoodDescription(props) {
    const { foodList } = props;

    const categories = useMemo(() => _keys(foodList), [foodList]);
    const foodListSectionRefs = useRef([]);

    const [cartQuantities, setCartQuantities] = useState({});

    function setRef(ele) {
        if (!foodListSectionRefs.current.includes(ele)) {
            foodListSectionRefs.current.push(ele);
        }
    }

    function handleCategoryClick(category) {
        const section = _find(foodListSectionRefs.current, {
            id: _toLower(category),
        });
        section.scrollIntoView({ behavior: "smooth" });
    }

    function handleAddToCart(event) {
        const {
            target: {
                dataset: { id },
            },
        } = event;
        setCartQuantities({ ...cartQuantities, [id]: 1 });
        
    }

    function handleIncrementClick(event) {
        const {
            target: {
                parentNode: {
                    dataset: { id },
                },
            },
        } = event;
        const updatedState = incrementQuantity(cartQuantities, id);
        setCartQuantities(updatedState);
    }

    function handleDecrementClick(event) {
        const {
            target: {
                parentNode: {
                    dataset: { id },
                },
            },
        } = event;
        const updatedState = decrementQuantity(cartQuantities, id);
        setCartQuantities(updatedState);
    }

    function handleCheckoutClick() {
        const items = getCartItems(cartQuantities, foodList);
        const amount = getTotalFromCartItems(items);
        const cartItemsData = { amount, items };
        saveToLocalStorage(CART_ITEMS, cartItemsData);
        clearCart();
    }

    function clearCart() {
        setCartQuantities({});
    }

    function renderCart() {
        const isCartEmpty = _isEmpty(cartQuantities);
        if (isCartEmpty) {
            return (
                <>
                    <h2>Cart Empty</h2>
                    <IconWithLabel
                        icon={emptyCartImage}
                        label={EMPTY_CART_DESCRIPTION}
                        className="empty-cart"
                    />
                </>
            );
        }
        return (
            <Cart
                cartQuantities={cartQuantities}
                foodList={foodList}
                onIncrementClick={handleIncrementClick}
                onDecrementClick={handleDecrementClick}
                onCheckoutClick={handleCheckoutClick}
            />
        );
    }

    return (
        <div className="flex food-description">
            <Sidebar
                categories={categories}
                onCategoryClick={handleCategoryClick}
            />
            <FoodList
                foodList={foodList}
                cartQuantities={cartQuantities}
                onAddToCart={handleAddToCart}
                onIncrementClick={handleIncrementClick}
                onDecrementClick={handleDecrementClick}
                setRef={setRef}
            />
            <div className="cart">{renderCart(cartQuantities, foodList)}</div>
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
