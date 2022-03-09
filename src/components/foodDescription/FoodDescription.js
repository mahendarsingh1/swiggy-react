import React from "react";
import Overview from "./Overview";
import FoodList from './FoodList'
import './FoodDescription.css'


class FoodDescription extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            foodListData: {},
        }
    }

    componentDidMount(){
        fetch('./data/foodList.json')
            .then(res => res.json())
            .then(data => this.setState({foodListData : data}))
            .catch(err=> console.log(err));
    }

    render(){
        return (
            <div className="food-description flex">
                <Overview categories={Object.keys(this.state.foodListData)} />
                <FoodList foodListData={this.state.foodListData} />
            </div>
        )
    }
}

export default FoodDescription;