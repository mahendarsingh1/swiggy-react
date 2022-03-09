// components
import Location from "./components/location";
import ControlOptionsList from "./components/controlOptionsList";
import BreadCrumb from '../breadcrumb'

// icon
import logo from '../../assets/images/swiggy.svg'

// constants
import { controlOptionsData, locationData, breadcrumbData } from './constants/headerConfig'

// css
import './header.css'

function Header(){

    return (
        <>
            <div className="header">
                <img src={logo} className="logo" alt="swiggy" />            
                <Location locationData={locationData} />
                <ControlOptionsList controlOptionsData={controlOptionsData} />
            </div>
            <BreadCrumb breadcrumbData={breadcrumbData}/>
        </>
    )
}

export default Header;