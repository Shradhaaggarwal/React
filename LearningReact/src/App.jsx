// import mgir from "./assets/mgir.png";

const App = () =>{
  return (
    //returning multiple components , fragments
    <> 
      <Netflix></Netflix>
      <Netflix></Netflix>
      <Netflix></Netflix>
      <Netflix></Netflix>
      <Netflix></Netflix>
    </>
  );
};

const Netflix = () =>{
  const name = "MY GIRLFRIEND IS A ROBOT";
  const rating = 8.2;
  const summary = () =>{
    return "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quia suscipit maiores tempore facilis in cum fugiat harum commodi architecto.";
  }
  const canwatch = (age) =>{
    if(age>= 18) return "watch now";
    else return "not available"
  }
  return (
    <div>
      <div>
        <img src="mgir.png" alt="mygfisarobot" width="40%" height="40%" />
      </div>
      {/* dynamic data rendering - [variables , functions] can also use exp - 5+3.2*/}
      <h1>NAME: {name}</h1> 
      <h3>RATING: {rating}</h3>
      <p>Synopsis: {summary()}</p>
      <button>{canwatch(19)}</button>
    </div>
  )
}


//--------------------------------------------- HOW IT WORKS AT THE BACK
// import React from 'react';
// const App = () => {
//   console.log(React.createElement("h1", null, "hello! my name is shradha"));
//   return React.createElement("h1", null, "hello, my name is shradha");
  
// }

export default App;

