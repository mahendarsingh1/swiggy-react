// Libraries
import PropTypes from 'prop-types'

// components
import DescriptionBoxList from "../descriptionBoxList";
import DescriptionHeading from "../descriptionHeading";

// css
import './description.css'


function Description(props){

    const { restaurantInfo, additionalInfo } = props;

    return (
        <div className="description inline">
            <DescriptionHeading restaurantInfo={restaurantInfo} />
            <DescriptionBoxList additionalInfo={additionalInfo}/>
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
    restaurantInfo :  {
        ratingInfo: {
          rating: "3.9",
          ratingCount: "100"
        },
        deliveryTime: "40 mins",
        costInfo: {
          cost: 200,
          peopleCount: "two"
        }
    },
    additionalInfo : {
        name : "Restaurant Name",
        type : "North Indian",
        city : "Bangalore"
    }
}

export default Description;