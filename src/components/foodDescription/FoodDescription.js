// React
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

// lodash
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
    incrementQuantity,
    decrementQuantity,
} from "./helpers/foodDescription.general";
import postCartDetails from "../../api/postCartItems";

// constants
import { EMPTY_CART_DESCRIPTION } from "./constants/foodDescription.general";
import { THANKYOU } from "../../constants/routes";

// icons
import emptyCartImage from "../../assets/images/cartEmpty.webp";

// css
import "./foodDescription.css";

function FoodDescription() {
    const foodListSectionRefs = useRef([]);

    const [cartQuantities, setCartQuantities] = useState({});
    const navigate = useNavigate();

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

    function handlePostCartItems(cartDetails) {
        postCartDetails(cartDetails)
            .then(handlePostCartItemsSuccess)
            .catch(handlePostCartItemsError);
    }

    function handlePostCartItemsSuccess() {
        navigate(THANKYOU);
    }

    function handlePostCartItemsError(error) {
        console.log(error);
    }

    function handleCheckoutClick() {
        handlePostCartItems(cartQuantities);
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
                onIncrementClick={handleIncrementClick}
                onDecrementClick={handleDecrementClick}
                onCheckoutClick={handleCheckoutClick}
            />
        );
    }

    return (
        <div className="flex food-description">
            <Sidebar onCategoryClick={handleCategoryClick} />
            <FoodList
                cartQuantities={cartQuantities}
                onAddToCart={handleAddToCart}
                onIncrementClick={handleIncrementClick}
                onDecrementClick={handleDecrementClick}
                setRef={setRef}
            />
            <div className="cart">{renderCart()}</div>
        </div>
    );
}

export default FoodDescription;
