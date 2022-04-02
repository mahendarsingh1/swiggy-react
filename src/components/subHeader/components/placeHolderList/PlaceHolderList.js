// Library
import PropTypes from 'prop-types'

// component
import PlaceHolder from '../placeHolder'

// readers
import additionalInfoReader from '../../readers/additionalInfoReader'

// icons
import star from '../../../../assets/images/star.svg'
import time from '../../../../assets/images/time.svg'
import rupee from '../../../../assets/images/rupee.svg'


function PlaceHolderList(props){

    const { additionalInfo } = props;

    const rating = additionalInfoReader.rating(additionalInfo)
    const ratingCount = additionalInfoReader.ratingCount(additionalInfo)
    const deliveryTime =  additionalInfoReader.deliveryTime(additionalInfo)
    const cost = additionalInfoReader.cost(additionalInfo)
    const peopleCount = additionalInfoReader.peopleCount(additionalInfo)

    return(
        <div className="flex">
            <PlaceHolder icon={star} heading={rating} subtitle={`${ratingCount}+ Ratings`}/>
            <PlaceHolder icon={time} heading={`${deliveryTime} mins`} subtitle="For delivery"/>
            <PlaceHolder icon={rupee} heading={cost} subtitle={`Cost for ${peopleCount}`}/>
        </div>
    )
}

PlaceHolderList.propTypes = {
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

PlaceHolderList.defaultProps = {
    additionalInfo : {}
}

export default PlaceHolderList;