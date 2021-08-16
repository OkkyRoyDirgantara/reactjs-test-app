import logo from './logo.svg';
import './App.css';
import {JavaScript,JSX} from "./Components/IntroductionJSX";
import {FoodsMenu,DrinksMenu} from "./Components/ComponentReact";

function App() {
  return (
    <div>
      <JavaScript />
        <JSX/>
        <FoodsMenu/>
      <DrinksMenu/>
    </div>
  );
}

export default App;
