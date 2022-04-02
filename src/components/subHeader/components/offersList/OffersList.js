// Library
import PropTypes from 'prop-types'

// lodash
import _map from 'lodash/map'

// component
import IconWithLabel from '../../../../commonComponents/iconWithLabel';

// icon
import offerIcon from '../../../../assets/images/offers.svg'

function renderOffers(offer) {
    return (
        <IconWithLabel key={offer} icon={offerIcon} label={offer} className="child-img-invert" />
    )
}

function OffersList(props){

    const { offers } = props;

    const offersList = _map(offers, renderOffers);

    return (
        <>
            {offersList}
        </>
    )
}

OffersList.propTypes = {
    offers : PropTypes.arrayOf(PropTypes.string)
}

OffersList.defaultProps = {
    offers : ["No Offer at this time"]
}

export default OffersList;