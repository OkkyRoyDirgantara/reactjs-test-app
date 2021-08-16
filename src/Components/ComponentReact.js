import React from "react";

class FoodsMenu extends React.Component {
    render() {
        return(
            <div>
                <div style={{border: "1px solid black", width: 300, margin: 'auto'}}>
                    <p>Menu Name: {this.props.nameMenu}</p>
                    <p>Price: {this.props.priceMenu}</p>
                </div>
            </div>
        );
    }
}

class DrinksMenu extends React.Component {
    render() {
        return(
            <div>
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
