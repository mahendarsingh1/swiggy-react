// Library
import PropTypes from 'prop-types'

function Icon(props){

    const { src, alt, className } = props;

    return(
        <>
            {src ? <img src={src} alt={alt} className={className}/> : null}
        </>
    )
}

Icon.propTypes = {
    src : PropTypes.string,
    alt : PropTypes.any,
    className : PropTypes.string
}

Icon.defaultProps = {
    src : undefined,
    alt : "",
    className : undefined
}

export default Icon;