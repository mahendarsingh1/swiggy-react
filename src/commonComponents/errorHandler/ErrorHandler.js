// Library
import PropTypes from 'prop-types'

// css
import './errorHandler.css'

function ErrorHandler(props){

    const { message } = props;
    return (
        <div className="error-handler">
            {message}
        </div>
    )
}

ErrorHandler.propTypes = {
    message : PropTypes.string
}

ErrorHandler.defaultProps = {
    message : "Something Went Wrong"
}

export default ErrorHandler;