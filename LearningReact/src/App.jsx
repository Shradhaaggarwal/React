// import mgir from "./assets/mgir.png";
import Netflix, { Headers, Footers} from "./components/netflixSeries.jsx"; //mixed //named import
// import {footers} from "./components/netflixSeries.jsx";
// import netflix from "./components/netflixSeries.jsx"; //default import


const App = () =>{
  return (
    //returning multiple components , fragments
    <> 
      <Headers></Headers>
      <Netflix></Netflix>
      <Netflix></Netflix>
      <Netflix></Netflix>
      <Netflix></Netflix>
      <Netflix></Netflix>
      <Footers></Footers>
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

