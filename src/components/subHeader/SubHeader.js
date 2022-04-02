// Libraries
import React from "react";

// components
import Description from "./components/description";
import OfferSection from './components/offerSection'
import Loader from "../../commonComponents/loader";
import ErrorHandler from '../../commonComponents/errorHandler'
import FilterSection from '../filterSection'

// readers
import subHeaderReader from './readers/subHeaderReader'

// constants
import { INITIAL_STATE, DEFAULT_RESTAURANT_ID, GENERAL_ERROR_MESSAGE } from "./constants/subheader.general";

// api
import fetchRestaurantData from "../../api/fetchRestaurantData";

// css
import './subHeader.css'

class SubHeader extends React.Component{
  
  state = INITIAL_STATE;

  componentDidMount(){
    this.getSubheaderData();
  }

  getSubheaderData(){
    fetchRestaurantData(DEFAULT_RESTAURANT_ID)
    .then(this.setRestaurantDetails)
    .catch(this.setErrorMessage)
    .finally(this.setLoaded)
  }
  
  setRestaurantDetails = (restaurantData) =>{
    const { restaurantDetails } = restaurantData;
    this.setState({ restaurantDetails });
  }

  setErrorMessage = (err) =>{
    const { message=GENERAL_ERROR_MESSAGE } = err;

    this.setState({ error : message})
  }

  setLoaded = () =>{
    this.setState({ isLoading : false })
  }

  render(){
    const { restaurantDetails, isLoading, error } = this.state;
    
    const restaurantImg = subHeaderReader.restaurantImg(restaurantDetails);
    const additionalInfo = subHeaderReader.additionalInfo(restaurantDetails);
    const restaurantInfo = subHeaderReader.restaurantInfo(restaurantDetails);
    const offers = subHeaderReader.offers(restaurantDetails);
    
    if(isLoading){
      return <Loader message="Loading..." color="red" />
    }

    if(error){
      return <ErrorHandler message={error} />
    }
    
    return (
      <>
        <div className="subheader flex align-items-center">
          <img src={restaurantImg} alt="Restaurant"/>
          <Description restaurantInfo={restaurantInfo} additionalInfo={additionalInfo} />
          <OfferSection offers={offers} />
        </div> 
        <FilterSection/> 
      </>
    );
  }
}

export default SubHeader;