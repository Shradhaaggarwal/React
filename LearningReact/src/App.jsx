// import mgir from "./assets/mgir.png";
import { EventHandler } from "./components/EventHandler.jsx";
import Netflix, { Headers, Footers} from "./components/NetflixSeries.jsx"; //mixed //named import
// import {footers} from "./components/netflixSeries.jsx";
// import netflix from "./components/netflixSeries.jsx"; //default import
// import "./components/Netflix.module.css"; 
import {EventAsProps}  from "./components/EventAsProps.jsx"


const App = () =>{
  return (
    //returning multiple components , fragments
    <> 
      {/* <Headers></Headers>
      <Netflix></Netflix>
      <Netflix></Netflix>
      <Netflix></Netflix>
      <Netflix></Netflix>
      <Netflix></Netflix>
      <Footers></Footers> */}
      {/* <EventHandler></EventHandler> */}
      <EventAsProps></EventAsProps>
    </>
  );
};




//--------------------------------------------- HOW IT WORKS AT THE BACK
// import React from 'react';
// const App = () => {
//   console.log(React.createElement("h1", null, "hello! my name is shradha"));
//   return React.createElement("h1", null, "hello, my name is shradha");
  
// }

export default App;

