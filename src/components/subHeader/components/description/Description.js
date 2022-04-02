// Libraries
import PropTypes from 'prop-types'

// components
import PlaceHolderList from "../placeHolderList";
import DescriptionHeading from "../descriptionHeading";

// css
import './description.css'


function Description(props){

    const { restaurantInfo, additionalInfo } = props;

    return (
        <div className="description inline">
            <DescriptionHeading restaurantInfo={restaurantInfo} />
            <PlaceHolderList additionalInfo={additionalInfo}/>
        </div>
    )
}

Description.propTypes = {
    additionalInfo : PropTypes.shape({
        ratingInfo : PropTypes.shape({
            rating : PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
            ratingCount : PropTypes.oneOfType([PropTypes.string,PropTypes.number])
        }),
        deliveryTime : PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        costInfo : PropTypes.shape({
            cost : PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
            peopleCount : PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        })
    }),
    restaurantInfo : PropTypes.shape({
        name : PropTypes.string,
        type : PropTypes.string,
        city : PropTypes.string
    })
}

Description.defaultProps = {
    restaurantInfo : {},
    additionalInfo : {}
};

export default Description;