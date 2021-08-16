# React Tutorial
Its example how to use ReactJS
## JSX Introduction

JavaScript :
```
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
```

JSX :

```
class JSX extends React.Component {
    render() {
        return(
            <h1 className={"is-class-name"}>Component H1</h1>
        );
    }
}
```

Writing class in javascript is replacing with `className={"is-class-name"}`

control variable :

```
class JSX extends React.Component {
    render() {
        const name = "Dirga";
        return(
            <h1 className={"is-class-name"}>Hi {name}</h1>
        );
    }
}
```
component ❌ :
```
render(){
    return (
        <h1> Its a Heading</h1>
        <p> Its a text content</p>
    )
}
```
component ✔️:
```
render(){
    return (
        <div>
            <h1> Its a Heading</h1>
            <p> Its a text content</p>
        </div>
    )
}
```
