import seriesData  from "../api/seriesData.json"



const Netflix = () =>{
//   const name = "MY GIRLFRIEND IS A ROBOT";
//   const rating = 8.2;
//   const summary = () =>{
//     return "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quia suscipit maiores tempore facilis in cum fugiat harum commodi architecto.";
//   }
const canwatch = (age) =>{
    if(age>= 18) return "watch now";
    else return "not available"
  }
   return (
    <ul>
   
        {seriesData.map((currEle) =>{
            return (
            <li key={currEle.id}>
                <img src = {currEle.img} alt="dramaPoster" width="40%" height="40%" />
                <h1>NAME: {currEle.name}</h1>
                <p>RATING: {currEle.rating}</p>
                <p>SYNOPSIS: {currEle.summary}</p>
                <button>{canwatch(19)}</button>
            </li>
            )
        })}  
    </ul>
   )
  
//   return (
//     <div>
//       <div>
//         <img src="mgir.png" alt="mygfisarobot" width="40%" height="40%" />
//       </div>
//       {/* dynamic data rendering - [variables , functions] can also use exp - 5+3.2*/}
//       <h1>NAME: {name}</h1> 
//       <h3>RATING: {rating}</h3>
//       <p>Synopsis: {summary()}</p>
      
//     </div>
//   )
}
export default Netflix;

export const Footers = () =>{
    return (
        <footer>
            <h4>Copyright @shradhaAggarwal2025</h4>
        </footer>
    )
}

export const Headers = () =>{
    return (
    <header>
        <h1>NETFLIX SERIES</h1>
    </header>
    )
}


