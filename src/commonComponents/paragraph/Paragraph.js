// Libraries
import PropTypes from 'prop-types'

// classNames
import cx from 'classnames'

// lodash
import _noop from 'lodash/noop'


function Paragraph(props){

    const { label, isActive, handleClick } = props;
    const paragrapghClassNames = cx({
        'active' : isActive
    })

    return (
        <p className={paragrapghClassNames} onClick={handleClick}>{label}</p>
    )
}

Paragraph.propTypes = {
    category : PropTypes.string,
    isActive : PropTypes.bool,
    handleClick : PropTypes.func
}

Paragraph.defaultProps = {
    category : 'category',
    isActive : false,
    handleClick : _noop
}

export default Paragraph;