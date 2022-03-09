// Libraries
import PropTypes from 'prop-types'
import _map from 'lodash/map'

// component
import ControlOption from "../controlOption";

function getControlOptionJsx(item, index){
    return <ControlOption key={item.label+index} {...item} />
}

function ControlOptionsList(props){

    const { controlOptionsData } = props;

    const list = _map(controlOptionsData, getControlOptionJsx)

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
            img: undefined,
            label:"Search",
            superScript : undefined
        }
    ]
}

export default ControlOptionsList;