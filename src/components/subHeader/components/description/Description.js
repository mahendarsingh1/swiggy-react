// Libraries
import PropTypes from 'prop-types'

// components
import DescriptionBoxList from "../descriptionBoxList";
import DescriptionAddress from "../descriptionAddress";

// css
import './description.css'


function Description(props){

    const { restaurantInfo, address } = props;

    return (
        <div className="description inline">
            <DescriptionAddress address={address} />
            <DescriptionBoxList restaurantInfo={restaurantInfo}/>
        </div>
    )
}

Description.propTypes = {
    restaurantInfo : PropTypes.shape({
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
    address : PropTypes.shape({
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
    address : {
        name : "Restaurant Name",
        type : "North Indian",
        city : "Bangalore"
    }
}

export default Description;