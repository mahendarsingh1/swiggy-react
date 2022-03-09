import searchIcon from '../../../assets/images/search.svg'
import offersIcon from '../../../assets/images/offers.svg'
import helpIcon from '../../../assets/images/help.svg'
import signInIcon from '../../../assets/images/signin.svg'
import cartIcon from '../../../assets/images/cart.svg'

export const controlOptionsData = [
    {
        className:"search",
        img:searchIcon,
        label:"Search"
    },
    {
        img:offersIcon,
        label:"Offers",
        superScript:"new"
    },
    {
        img:helpIcon,
        label:"Help"
    },
    {
        img:signInIcon,
        label:"Sign In"
    },
    {
        img:cartIcon,
        label:"Cart"
    }
];

export const locationData = {
    name : "Sevashrama",
    address : "Bangalore Railway Station",
}

export const breadcrumbData = {
    path : ["Home ", "Bangalore ", "BTM - Bangalore "],
    target : "Kitchens of Punjab"
}