import styles from "./todo.module.css"
import { useEffect } from "react"
import { useState } from "react"

export const DateTime = () =>{
const [times, setTime] = useState("")

useEffect(()=>{
    const interval = setInterval(() => {
        const ddtt = new Date();
        const fdate = ddtt.toLocaleDateString()
        const ftime = ddtt.toLocaleTimeString()
        setTime(`${fdate} - ${ftime}`)
    }, 1000);

    return (()=> clearInterval(interval));
},[])
    
    return(
        <h3 className={styles.dataTime}>{times}</h3>
    )
}