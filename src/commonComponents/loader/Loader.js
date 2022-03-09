// Libraries
import PropTypes from 'prop-types'

// css
import './loader.css'

function Loader(props){

    const { message } = props;

    return (
        <div className="loader">
            {message}
        </div>
    )
}

Loader.propTypes = {
    message : PropTypes.string
}

Loader.defaultProps = {
    message : "Loading..."
}

export default Loader;