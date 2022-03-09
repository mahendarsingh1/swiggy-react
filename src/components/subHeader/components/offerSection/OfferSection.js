// Library
import PropTypes from 'prop-types'

// component
import OffersList from '../offersList'

// css
import './offerSection.css'


function DiscountSection(props){

    const { offers } = props;

    return(
        <div className="inline">
            <h3 className="offer-heading inline">offer</h3>
            <div className="offer-section">
                <OffersList offers={offers} />
            </div>
        </div>
    )
}

DiscountSection.propTypes = {
    offers : PropTypes.arrayOf(PropTypes.string)
}

DiscountSection.defaultProps = {
    offers : ["No Offer at this time"]
}

export default DiscountSection;