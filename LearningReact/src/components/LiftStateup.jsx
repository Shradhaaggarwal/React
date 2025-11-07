import { useState } from "react"
export const LiftStateup = () =>{
    const [inputvalue, setvalue] = useState("")
    return(
        <>
            <InputComponent inputv = {inputvalue} setval = {setvalue}></InputComponent>
            <DisplayComponent inputv={inputvalue}></DisplayComponent>
        </>
    )
}

const InputComponent = ({inputv, setval}) =>{
    
    return (
        <>
            <input type="text" placeholder="ENTER THE TEXT HERE..." 
            value={inputv} 
            onChange={(e)=> setval(e.target.value)}/>
        </>
    )
}

const DisplayComponent = ({inputv}) =>{
    return (
        <>
            <p>THE ENTERED TEXT IS: {inputv}</p>
        </>
    )
}