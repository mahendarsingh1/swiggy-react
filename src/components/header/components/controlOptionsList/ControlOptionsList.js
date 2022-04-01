// Libraries
import PropTypes from 'prop-types'
import _ from 'lodash'

// component
import ControlOption from "../controlOption";

function getControlOptionJsx(item, index){
    return <ControlOption key={item.label+index} item={item} />
}

function ControlOptionsList(props){

    const { controlOptionsData } = props;

    const list = _.map(controlOptionsData, getControlOptionJsx)

    return (
        <> {list} </>
    );
}

ControlOptionsList.propTypes = {
    controlOptionsData : PropTypes.arrayOf(PropTypes.object)
}

ControlOptionsList.defaultProps = {
    controlOptionsData : [
        {
            className:"search",
            img: null,
            label:"Search"
        }
    ]
}

export default ControlOptionsList;