import { Children } from "react";
import styles from "./Netflix.module.css"
import styled from 'styled-components'; 

//as componentes bhi use krskte hain with `;` and ({,}) for stylles with tags const shradhabutton = styled.button({}) 

export const Cards = (/*props*/ {data, children, renderbutton}) =>{
    const {id, name, img, rating, summary} = /*props.data*/ data;
    
    return (
            <li className={styles.listt} key={id}>
                <img src = {img} alt="dramaPoster" width="40%" height="40%" />
                <h1 className="underline">NAME: {name}</h1>
                <p>RATING: {rating}</p>
                <p>SYNOPSIS: {summary}</p>
                <p>{children}</p>
                {/* <button>{canwatch(19)}</button> */}
                {renderbutton && renderbutton()}
            </li>
    )
}