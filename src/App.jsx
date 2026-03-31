import React from "react";
import reactLogo from '../src/assets/react.svg'
// import Fruits from "./Fruits.jsx";
// import Counter from "./Counter.jsx";
// import LikeButton from './LikeButton.jsx'
import SimpleForm from "./SimpleForm.jsx";
import MultiForm from "./MultiForm.jsx";



const App = () => {
  return (
    <>
      <h2> hello this is the app components </h2>
      <img src={reactLogo}
      width="200px"
       alt="logo" />
       {/* <Fruits/>
       <Counter/>
       <LikeButton/> */}
       <SimpleForm/>
       <MultiForm/>
    
       
    </>
  );
};

export default App;
