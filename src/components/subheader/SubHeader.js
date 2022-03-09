import React from "react";
import PropTypes from 'prop-types'

import Description from "./components/Description";
import DiscountSection from './components/DiscountSection'
import Loader from "../../commonComponents/Loader";

import subheaderReader from './readers/subheaderReader'
import { INITIAL_STATE, subheaderDataUrl } from "./constants/Subheader.general";
import fetchData from "../../api/fetch";


import './SubHeader.css'

class SubHeader extends React.Component{
  
  constructor(props){
    super(props);
    this.state = INITIAL_STATE;
  }

  componentDidMount(){
    this.fetchAndSetSubheaderData();
  }

  setSubheaderState = (data)=> {
    this.setState({ subheaderData : data}); 
  }

  fetchAndSetSubheaderData(){
    fetchData(subheaderDataUrl)
      .then( this.setSubheaderState );
  }

  render(){
    const { subheaderData } = this.state;
    if(!subheaderData)  return <Loader />


    const restaurantImg = subheaderReader.restaurantImg(subheaderData);
    const address = subheaderReader.address(subheaderData);
    const restaurantInfo = subheaderReader.restaurantInfo(subheaderData);
    const offers = subheaderReader.offers(subheaderData);

    return (
      <div className="subheader flex align-items-center">
        <img src={restaurantImg} alt="Restaurant"/>
        <Description address={address} restaurantInfo={restaurantInfo} />
        <DiscountSection offers={offers} />
      </div>  
    );
  }
}


SubHeader.propTypes = {
  subheaderData : PropTypes.object
}

export default SubHeader;