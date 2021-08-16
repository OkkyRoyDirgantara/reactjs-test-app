import React from "react";

class JavaScript extends React.Component {
    render() {
        return(
            React.createElement(
                "h1",
                {className: "main-title", id: "title"},
                "Welcome to my website!"
            )
        );
    }
}

class JSX extends React.Component {
    render() {
        const name = "Dirga";
        return(
            <h1 className={"is-class-name"}>Hi {name}</h1>
        );
    }
}

export {
    JavaScript,
    JSX,
};
