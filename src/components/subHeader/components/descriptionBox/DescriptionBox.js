// Libraries
import PropTypes from 'prop-types'

// components
import Icon from '../../../../commonComponents/icon';

// css
import './descriptionBox.css'


function DescriptionBox(props){

    const { icon, heading, subtitle } = props;

    return (
        <div className="description-box margin-2-percent">
            <Icon src={icon} alt={heading} className="h-0-8" />
            {" "}
            <h4 className="inline">{heading}</h4>
            <p className="op-6">{subtitle}</p>
        </div>
    )
}

DescriptionBox.propTypes = {
    item : PropTypes.shape({
        heading : PropTypes.string,
        subtitle : PropTypes.string,
        icon : PropTypes.string,
    })
}

DescriptionBox.defaultProps = {
    heading : 'heading',
    subtitle : 'paragraph',
    icon : undefined,
}


export default DescriptionBox;