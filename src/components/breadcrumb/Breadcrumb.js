// libraries
import PropTypes from 'prop-types'
import _ from 'lodash'

// css
import './breadcrumb.css';

function getBreadcrumbItemJsx(item,index){
    return <span key={item+index}>{`${item} /`}</span>;
}

function Breadcrumb(props){

    const { breadcrumbData : {path, target} } = props;

    const breadcrumbPath = _.map(path, getBreadcrumbItemJsx);

    return (
        <div className="breadcrumb">
            { breadcrumbPath }
            { target }
        </div>
    )
}

Breadcrumb.propTypes = {
    breadcrumbData : PropTypes.shape({
        path : PropTypes.arrayOf(PropTypes.string),
        target : PropTypes.string
    })
}

Breadcrumb.defaultProps = {
    breadcrumbData : {
        path : ['path'],
        target : 'target'
    }
}

export default Breadcrumb;