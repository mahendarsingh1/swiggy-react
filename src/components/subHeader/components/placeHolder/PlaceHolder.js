// Libraries
import PropTypes from 'prop-types'

// components
import Icon from '../../../../commonComponents/icon';

// css
import './placeHolder.css'


function PlaceHolder(props){

    const { icon, heading, subtitle } = props;

    return (
        <div className="place-holder margin-1">
            <Icon src={icon} alt={heading} className="h-0-8" />
            {" "}
            <h4 className="inline">{heading}</h4>
            <p className="op-6">{subtitle}</p>
        </div>
    )
}

PlaceHolder.propTypes = {
    heading : PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    subtitle : PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    icon : PropTypes.string,
}

PlaceHolder.defaultProps = {
    heading : "heading",
    subtitle : "subtitle",
    icon : undefined
}


export default PlaceHolder;