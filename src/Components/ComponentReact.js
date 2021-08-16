import React from "react";

class FoodsMenu extends React.Component {
    render() {
        return(
            <div className={"App"}>
                <h1>Cafe and Resto</h1>
                <h2>Foods Menu</h2>
                <div style={{border: "1px solid black", width: 300, margin: 'auto'}}>
                    <p>Menu Name: Chicken</p>
                    <p>Price: Rp. 25.000</p>
                </div>
            </div>
        );
    }
}

class DrinksMenu extends React.Component {
    render() {
        return(
            <div className={"App"}>
                <h2>Drinks Menu</h2>
                <div style={{border: "1px solid black", width: 300, margin: 'auto'}}>
                    <p>Menu Name: Melon Juice</p>
                    <p>Price: Rp. 15.000</p>
                </div>
            </div>
        );
    }
}

export {
    FoodsMenu,
    DrinksMenu,
};
