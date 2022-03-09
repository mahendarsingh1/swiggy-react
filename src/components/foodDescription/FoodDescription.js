import React from "react";
import Sidebar from "./components/Sidebar";
import FoodList from './components/FoodList';

import { INITIAL_STATE, foodListDataUrl } from "./constants/FoodDescription.general";
import fetchData from "../../api/fetch";

import './FoodDescription.css'


class FoodDescription extends React.Component{
    
    constructor(props){
        super(props);
        this.state = INITIAL_STATE;
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

        const { foodListData } = this.state;

        return (
            <div className="food-description flex">
                <Sidebar categories={Object.keys(foodListData)} />
                <FoodList foodListData={foodListData} />
            </div>
        )
    }
}

export default FoodDescription;