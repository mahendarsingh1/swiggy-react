// Library
import PropTypes from 'prop-types'

// component
import IconWithLabel from '../../../../commonComponents/iconWithLabel';

// icon
import offerIcon from '../../../../assests/images/offers.svg'

function getOfferJsxFromOfferText(offer) {
    return (
        <IconWithLabel key={offer} icon={offerIcon} label={offer} imgClassName="invert h-15" />
    )
}

function OffersList(props){

    const { offers } = props;

    const offersList = offers.map(getOfferJsxFromOfferText)

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