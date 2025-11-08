// import mgir from "./assets/mgir.png";
// import { EventHandler } from "./components/EventHandler.jsx";
// import Netflix, { Headers, Footers} from "./components/NetflixSeries.jsx"; //mixed //named import
// import {footers} from "./components/netflixSeries.jsx";
// import netflix from "./components/netflixSeries.jsx"; //default import
// import "./components/Netflix.module.css"; 
// import {EventAsProps}  from "./components/EventAsProps.jsx"
// import { State } from "./components/State.jsx";
// import { LiftStateup } from "./components/LiftStateup";
// import {Toggle} from "./components/projects/Toggle/Toggle.jsx"
// import { Todo } from "./components/projects/todo/Todo.jsx"
import { Todo } from "./components/projects/todo/todo";



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
      {/* <EventAsProps></EventAsProps> */}
      {/* <State></State> */}
      {/* <LiftStateup></LiftStateup> */}
      {/* <Toggle></Toggle> */}
      <Todo></Todo>
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

