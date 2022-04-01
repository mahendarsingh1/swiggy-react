// Library
import PropTypes from 'prop-types'

// component
import DescriptionBox from '../descriptionBox'

// readers
import descriptionReader from '../../readers/descriptionReader'

// icons
import star from '../../../../assets/images/star.svg'
import time from '../../../../assets/images/time.svg'
import rupee from '../../../../assets/images/rupee.svg'


function DescriptionBoxList(props){

    const { additionalInfo } = props;

    const rating = descriptionReader.rating(additionalInfo)
    const ratingCount = descriptionReader.ratingCount(additionalInfo)
    const deliveryTime =  descriptionReader.deliveryTime(additionalInfo)
    const cost = descriptionReader.cost(additionalInfo)
    const peopleCount = descriptionReader.peopleCount(additionalInfo)

    return(
        <div className="flex">
            <DescriptionBox icon={star} heading={rating} subtitle={`${ratingCount}+ Ratings`}/>
            <DescriptionBox icon={time} heading={`${deliveryTime} mins`} subtitle="For delivery"/>
            <DescriptionBox icon={rupee} heading={cost} subtitle={`Cost for ${peopleCount}`}/>
        </div>
    )
}

DescriptionBoxList.propTypes = {
    additionalInfo : PropTypes.shape({
        ratingInfo : PropTypes.shape({
            rating : PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
            ratingCount : PropTypes.oneOfType([PropTypes.string,PropTypes.number])
        }),
        deliveryTime : PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        costInfo : PropTypes.shape({
            cost : PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
            peopleCount : PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        })
    })
}

DescriptionBoxList.defaultProps = {
    restaurantInfo :  {
        ratingInfo: {
          rating: "3.9",
          ratingCount: "100"
        },
        deliveryTime: "40",
        costInfo: {
          cost: 200,
          peopleCount: "two"
        }
    }
}

export default DescriptionBoxList;