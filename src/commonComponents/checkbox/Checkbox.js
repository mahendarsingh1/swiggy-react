// Library
import PropTypes from 'prop-types'

// css
import './checkbox.css'

function Checkbox(props){

    const { label, id, className } = props;

    return(
        <div className={`cursor-pointer ${className}`}>
            <input className="cursor-pointer" type="checkbox" id={id} />
            {" "}
            <label className="cursor-pointer" htmlFor={id}>{label}</label>
        </div>
    )
}

Checkbox.propTypes = {
    label : PropTypes.string,
    id : PropTypes.string,
    className : PropTypes.string
}

Checkbox.defaultProps = {
    label : "Checkbox",
    id : "filter-checkbox",
    className : ""
}


export default Checkbox;