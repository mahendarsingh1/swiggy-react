// Libraries
import PropTypes from 'prop-types'

// components
import Description from "./components/description";
import OfferSection from './components/offerSection';
import FilterSection from "../filterSection";
import Icon from '../../commonComponents/icon'

// readers
import subHeaderReader from './readers/subHeaderReader'

// css
import './subHeader.css'

function SubHeader(props) {
  
  const { restaurantDetails } = props;

  const restaurantImg = subHeaderReader.restaurantImg(restaurantDetails);
  const additionalInfo = subHeaderReader.additionalInfo(restaurantDetails);
  const restaurantInfo = subHeaderReader.restaurantInfo(restaurantDetails);
  const offers = subHeaderReader.offers(restaurantDetails);

  return (
    <>
      <div className="subheader flex align-items-center">
        <Icon src={restaurantImg} alt="Restaurant"/>
        <Description restaurantInfo={restaurantInfo} additionalInfo={additionalInfo} />
        <OfferSection offers={offers} />
      </div>
      <FilterSection/>
    </>
  );
}

SubHeader.propTypes = {
  restaurantDetails : PropTypes.shape({
    restaurantImg : PropTypes.string,
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
  }),
    offers : PropTypes.arrayOf(PropTypes.string)
  })
}

SubHeader.defaultProps = {
  restaurantDetails : {}
}

export default SubHeader;