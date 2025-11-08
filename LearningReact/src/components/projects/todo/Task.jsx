import styles from "./todo.module.css"
import { TiTick} from "react-icons/ti";
import { MdDeleteForever } from "react-icons/md";


export const Task = ({data, handleDeleteFunc, handleontick}) =>{
    return (
        <li className={styles.listdata}>
            <p className={data.checked ? styles.ontick : styles.oncross}>{data.content}</p>
            <div className={styles.butts}>
            <button onClick={()=>handleontick(data.content)}><TiTick /></button>
            <button onClick={()=>handleDeleteFunc(data.content)}><MdDeleteForever /></button>
            </div>
        </li>
    )
}