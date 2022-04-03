// icons
import vegIcon from "../assets/images/vegSymbol.svg";
import nonVegIcon from "../assets/images/nonVeg.svg";

function getIconByType(type) {
    const veg = type === "veg";

    return veg ? vegIcon : nonVegIcon;
}

export default getIconByType;
