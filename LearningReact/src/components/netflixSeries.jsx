import seriesData  from "../api/seriesData.json"
import {Cards} from "./Cards.jsx"
import styles from "./Netflix.module.css"



const Netflix = () =>{
//   const name = "MY GIRLFRIEND IS A ROBOT";
//   const rating = 8.2;
//   const summary = () =>{
//     return "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quia suscipit maiores tempore facilis in cum fugiat harum commodi architecto.";
//   }

const but_sty = {
    padding : "2px",
    backgroundColor: "red",
}

   return (
    <ul>
        {seriesData.map((currEle) =>(
            <Cards 
            key={currEle.id} 
            data={currEle} 
            renderbutton={
                ()=> {
                const canwatch = (age) =>{
                if(age>= 18) return "watch now";
                else return "not available" }
                return <button style={but_sty}>{canwatch(19)}</button>}}>
                <p>GENRE: rom-com</p>
            </Cards>
            
        ))}  
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


