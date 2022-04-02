// Libraries
import PropTypes from 'prop-types'
import { TailSpin } from 'react-loader-spinner';

// css
import './loader.css'

function Loader(props){

    const { message, color } = props;

    return (
        <div className="loader">
            <TailSpin color={color}/>
            {message}
        </div>
        
    )
}

Loader.propTypes = {
    message : PropTypes.string,
    color : PropTypes.string
}

Loader.defaultProps = {
    message : "Loading...",
    color : "red"
}

export default Loader;