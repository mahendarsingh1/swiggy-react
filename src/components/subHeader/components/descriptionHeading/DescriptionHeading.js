// Libraries
import PropTypes from 'prop-types'

// reader
import descriptionHeadingReader from "../../readers/descriptionHeadingReader";


function DescriptionAdress(props){

    const { restaurantInfo } = props;

    const name = descriptionHeadingReader.name(restaurantInfo);
    const type = descriptionHeadingReader.type(restaurantInfo);
    const city = descriptionHeadingReader.city(restaurantInfo);
    
    return (
        <>
            <p className="description-heading">{name}</p>
            <p className="description-address">{type}</p>
            <p className="description-address">{city}</p>
        </>
    )
}

DescriptionAdress.propTypes = {
    restaurantInfo : PropTypes.shape({
        name : PropTypes.string,
        type : PropTypes.string,
        city : PropTypes.string
    })
}

DescriptionAdress.defaultProps = {
    restaurantInfo : {
        name : "Restaurant Name",
        type : "North Indian",
        city : "Bangalore"
    }
}

export default DescriptionAdress;