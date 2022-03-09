// Libraries
import React from "react";

// components
import Description from "./components/description";
import OfferSection from './components/offerSection'
import Loader from "../../commonComponents/loader";
import ErrorHandler from '../../commonComponents/errorHandler'

// readers
import subHeaderReader from './readers/subHeaderReader'

// constants
import { INITIAL_STATE, DEFAULT_RESTAURANT_ID, GENERAL_ERROR_MESSAGE } from "./constants/subheader.general";

// helpers
import fetchRestaurantData from "./helpers/fetchRestaurantData";

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
    this.setState({ restaurantDetails : restaurantData });
  }

  setErrorMessage = (err) =>{
    let { message } = err;
    if(!message)  message = GENERAL_ERROR_MESSAGE;

    this.setState({ error : message})
  }

  setLoaded = () =>{
    this.setState({ isLoading : false })
  }

  render(){
    const { restaurantDetails, isLoading, error } = this.state;
    
    if(isLoading){
      return <Loader message="Loading..." />
    }

    if(error){
      return <ErrorHandler message={error} />
    }

    const restaurantImg = subHeaderReader.restaurantImg(restaurantDetails);
    const address = subHeaderReader.address(restaurantDetails);
    const restaurantInfo = subHeaderReader.restaurantInfo(restaurantDetails);
    const offers = subHeaderReader.offers(restaurantDetails);

    return (
      <div className="subheader flex align-items-center">
        <img src={restaurantImg} alt="Restaurant"/>
        <Description address={address} restaurantInfo={restaurantInfo} />
        <OfferSection offers={offers} />
      </div>  
    );
  }
}


export default SubHeader;