import React from "react";

// lodash
import _ from 'lodash'

// components
import Sidebar from "./components/Sidebar";
import FoodList from './components/FoodList';
import Cart from '../cart'

// constants
import { INITIAL_STATE, foodListDataUrl } from "./constants/FoodDescription.general";

// helper
import fetchData from "../../api/fetch";

// css
import './FoodDescription.css'


class FoodDescription extends React.Component{
    
    constructor(props){
        super(props);
        this.state = INITIAL_STATE;

        this.handleAddToCart = this.handleAddToCart.bind(this);
        this.handleQuantityUpdate = this.handleQuantityUpdate.bind(this);
        this.handleClearCart = this.handleClearCart.bind(this);
    }

    handleAddToCart(newItemId, category){
        const {cartData, foodListData} = this.state;

        const sameItemPresent = _.find(cartData, {id : newItemId})
        if(!sameItemPresent){
            const itemToAdd = _.find( foodListData[category], {id : newItemId})
            let newItem = {...itemToAdd}
            delete newItem.description;
            this.setState({cartData: [...cartData, {...newItem, quantity:1 }]})
        }
    }

    handleQuantityUpdate(id,type){
        const { cartData } = this.state;

        let itemToUpdate = _.find(cartData, {id: id});
        let newItem = { ...itemToUpdate , quantity : itemToUpdate.quantity+type }

        if(newItem.quantity===0){
            let filteredItems = cartData.filter(item => item.id!==Number(id));
            this.setState({ cartData: filteredItems})
        }
        else{
            let mappedItems = cartData.map(item => item.id===id? newItem : item );
            this.setState({cartData: mappedItems})
        }
    }

    handleClearCart(){
        this.setState({ cartData : [] });
    }

    componentDidMount(){
        this.fetchAndSetFoodListData();
    }

    fetchAndSetFoodListData(){
        fetchData(foodListDataUrl)
            .then(this.setFoodListState)
    }

    setFoodListState = (data) => {
        this.setState({foodListData : data});
    }

    render(){

        const { foodListData, cartData } = this.state;

        return (
            <div className="food-description flex">
                <Sidebar categories={Object.keys(foodListData)} />
                <FoodList foodListData={foodListData} handleAddToCart={this.handleAddToCart}/>
                <Cart 
                    cartData={cartData} 
                    handleQuantityUpdate={this.handleQuantityUpdate} 
                    handleClearCart={this.handleClearCart} 
                />
            </div>
        )
    }
}

export default FoodDescription;