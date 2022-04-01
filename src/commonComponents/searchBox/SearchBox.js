// Library
import PropTypes from 'prop-types'

// components
import Icon from '../icon'

// icon
import searchIcon from '../../assets/images/search.svg'

// css
import './searchBox.css'

function SearchBox(props){

    const { className, icon, placeholder } = props;

    return(
        <div className={className}>
            <Icon src={icon} alt="search" />
            {" "}
            <input type="text" placeholder={placeholder}/>
        </div>
    )
}

SearchBox.propTypes = {
    icon : PropTypes.string,
    className : PropTypes.string,
    placeholder : PropTypes.string
}

SearchBox.defaultProps = {
    icon : searchIcon,
    placeholder : "Search",
    className : undefined
}

export default SearchBox;