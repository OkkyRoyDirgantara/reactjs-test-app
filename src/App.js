import logo from './logo.svg';
import React from "react";
import './App.css';
import {JavaScript,JSX} from "./Components/IntroductionJSX";
import {FoodsMenu,DrinksMenu} from "./Components/ComponentReact";

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            nameResto: "Dirga",
        }
    }
    render() {
        return (
            <div>
                <JavaScript />
                <JSX/>
                <div className={"App"}>
                    <h1>Cafe and Resto {this.state.nameResto}</h1>
                    <h2>Foods Menu</h2>
                    <FoodsMenu nameMenu={"Chicken"} priceMenu={"25000"}/>
                    <FoodsMenu/>

                    <h2>Drinks Menu</h2>
                    <DrinksMenu/>
                </div>
            </div>
        );
    }
}

export default App;
