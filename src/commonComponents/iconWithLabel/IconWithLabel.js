// Library
import PropTypes from 'prop-types'

// component
import Icon from '../icon'

// css
import './iconWithLabel.css'

function IconWithLabel(props){

    const { icon, label, className } = props;

    return(
        <div className={`icon-with-label ${className}`}>
            <Icon src={icon} alt={label} />
            {" "}
            {label}
        </div>
    )
}

IconWithLabel.propTypes = {
    icon : PropTypes.string,
    label : PropTypes.string,
    className : PropTypes.string
}

IconWithLabel.defaultProps = {
    icon : undefined,
    label : "label",
    className : ""
}

export default IconWithLabel;