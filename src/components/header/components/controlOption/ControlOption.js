// prop types
import PropTypes from 'prop-types';

// css
import './controlOption.css'


function ControlOption(props){

    const  { className, img, label, superScript }  = props;

    return (
        <div className={`inline control-options cursor-pointer ${className}`}>
            {img && <img src={img} alt={label} className='h-0-9'/>}
            {' '}
            {label}
            {superScript && <span className='superscript'>{superScript}</span>}
        </div>
    )
}

ControlOption.propTypes = {
    className : PropTypes.string,
    img : PropTypes.string,
    label : PropTypes.string,
    superScript : PropTypes.string
}

ControlOption.defaultProps = {
    className : "",
    img : undefined,
    label : 'label',
    superScript : undefined
}

export default ControlOption;