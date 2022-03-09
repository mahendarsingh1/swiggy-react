// components
import SearchBox from '../../commonComponents/searchBox'
import Checkbox from "../../commonComponents/checkbox/Checkbox";
import IconWithLabel from '../../commonComponents/iconWithLabel';

// icon
import FavouriteIcon from '../../assests/images/favourite.svg'

// css
import './filterSection.css'

function FilterSection(){

    return (
        <div className="filter-section">
            <SearchBox placeholder="Search for Dishes" />
            <Checkbox label="Veg Only" id="filter-checkbox"/>
            <IconWithLabel icon={FavouriteIcon} label="Favourite" containerClassName="inline filter-inputs favourite-filter cursor-pointer"/>
        </div>
    )
}

export default FilterSection;