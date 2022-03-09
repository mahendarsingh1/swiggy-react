// Libraries
import React from "react";

// components
import Description from "./components/description";
import DiscountSection from './components/discountSection'
import Loader from "../../commonComponents/loader";
import ErrorHandler from '../../commonComponents/errorHandler'

// readers
import subheaderReader from './readers/subheaderReader'

// constants
import { INITIAL_STATE, subheaderDataUrl } from "./constants/subheader.general";

// helpers
import fetchData from "../../api/fetch";

// css
import './subHeader.css'

class SubHeader extends React.Component{
  
  constructor(props){
    super(props);
    this.state = INITIAL_STATE;
  }

  componentDidMount(){
    this.getSubheaderData();
  }

  getSubheaderData(){
    fetchData(subheaderDataUrl)
    .then(this.setSubheaderData)
    .catch(this.handleError)
    .finally(this.setLoaded)
  }
  
  setSubheaderData = (data) =>{
    this.setState({ subheaderData : data });
  }

  handleError = (err) =>{
    this.setState({ error : err.message})
  }

  setLoaded = () =>{
    this.setState({ isLoading : false })
  }

  render(){
    const { subheaderData, isLoading, error } = this.state;
    
    if(isLoading)  return <Loader />

    if(error) return <ErrorHandler message={error} />

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


export default SubHeader;