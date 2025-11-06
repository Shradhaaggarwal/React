import { Children } from "react";


export const Cards = (/*props*/ {data, children, renderbutton}) =>{
    const {id, name, img, rating, summary} = /*props.data*/ data;
    
    return (
            <li key={id}>
                <img src = {img} alt="dramaPoster" width="40%" height="40%" />
                <h1>NAME: {name}</h1>
                <p>RATING: {rating}</p>
                <p>SYNOPSIS: {summary}</p>
                <p>{children}</p>
                {/* <button>{canwatch(19)}</button> */}
                {renderbutton && renderbutton()}
            </li>
    )
}