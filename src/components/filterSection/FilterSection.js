// components
import SearchBox from '../../commonComponents/searchBox'
import Checkbox from "../../commonComponents/checkbox";
import IconWithLabel from '../../commonComponents/iconWithLabel';

// icon
import searchIcon from '../../assets/images/search.svg'
import favouriteIcon from '../../assets/images/favourite.svg'

// css
import './filterSection.css'

function FilterSection(){

    return (
        <div className="filter-section">
            <SearchBox icon={searchIcon} placeholder="Search for Dishes" className="inline filter-input search-box" />
            <Checkbox label="Veg Only" id="filter-checkbox" className='inline filter-input hover-green'/>
            <IconWithLabel icon={favouriteIcon} label="Favourite" className="inline filter-input hover-red cursor-pointer"/>
        </div>
    )
}

export default FilterSection;