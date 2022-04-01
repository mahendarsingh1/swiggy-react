// prop types
import PropTypes from 'prop-types';

// icon
import dropDownIcon from '../../../../assets/images/dropdown.svg';

// css
import './location.css';

function Location(props){

    const { locationData : {name, address} } = props;

    return <div className="location inline cursor-pointer">
            <ins>{name}</ins> 
            {' '}
            <span>{address}</span>
            {' '}
            <img src={dropDownIcon} alt="Dropdown" />
        </div>
}

Location.propTypes = {
    locationData : PropTypes.shape({
        name : PropTypes.string,
        address : PropTypes.string
    })
}

Location.defaultProps = {
    locationData : {
        name : 'Restaurant Name',
        address : 'Bangalore'
    }
}

export default Location;