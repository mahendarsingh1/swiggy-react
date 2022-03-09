// css
import './errorHandler.css'

function ErrorHandler(props){

    const { message } = props;
    return (
        <div className="errorHandler">
            {message}
        </div>
    )
}

export default ErrorHandler;