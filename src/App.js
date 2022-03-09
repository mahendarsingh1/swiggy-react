import React from "react";

import Header from "./components/header";
import Breadcrumb from "./components/breadcrumb";
import SubHeader from "./components/subheader";
import FilterSection from "./components/filterSection";
import FoodDescription from './components/foodDescription'

import './App.css'

function App() {
  return (
    <>
      <Header/>
      <Breadcrumb/>
      <SubHeader/>
      <FilterSection/>
      <FoodDescription/>
   </>
  );
}

export default App;
