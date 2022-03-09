import searchIcon from '../../../assests/images/search.svg';
import favouriteIcon from '../../../assests/images/favourite.svg';

const inputData = [
    {
        className : "dish-search", 
        img : searchIcon, 
        inputClass : "dish-search", 
        inputType : "text", 
        inputPlaceholder : "Search for Dishes"
    },
    {
        className : "veg-only", 
        inputClass : "veg-only-checkbox", 
        inputType : "checkbox", 
        label : "Veg Only"
    },
    {
        className : "favourite-filter", 
        img : favouriteIcon, 
        label : "Favourite"
    }
]

export default inputData;