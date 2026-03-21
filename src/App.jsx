import React from "react";
import Hello from './Hello.jsx'
import reactLogo from '../src/assets/react.svg'
import Bye from "./Bye.jsx";
import Fruits from "./Fruits.jsx";
import Condition from "./Condition.jsx";


const App = () => {
  return (
    <>
      <h2> hello this is the app components </h2>
      <Hello />
      <img src={reactLogo}
      width="200px"
       alt="logo" />
       <Bye/>
       <Fruits/>
       <Condition/>
    </>
  );
};

export default App;
