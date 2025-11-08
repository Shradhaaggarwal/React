import styles from "./todo.module.css"
import { useState } from "react"
import { DateTime } from "./DateTime";
import { Form } from "./Form"
import { Task } from "./Task";

//inserting task in the input field
export const Todo = () =>{
    const [inputval, setChange] = useState({})

    const handleInputValue = (e) =>{
        setChange({id: e, content: e, checked: false})
    }

//insertion of task into a list
    const[task, setTask] = useState([])
    const handleSubmit = (event) =>{
        const {id, content, checked} = inputval
        event.preventDefault();

        if(!content) return;
        // if(task.includes(inputval)){
        //     setChange("")
        //     return;
        // }
        const ifavail = task.find((curr) => curr.content === content)
        if(ifavail) {
            setChange({id:"", content:"", checked: false});
            return} 

        setTask((prevtask) => [...prevtask, {id, content, checked}])
        setChange({id:"", content:"", checked: false});
    }

//deletion of a task

const handleDeleteFunc = (value) =>{
    const updated = task.filter((currtask)=> currtask.content !== value)
    setTask(updated)
}

const handleDel = () =>{
    setTask([]);
}

const handleontick = (value) =>{
    const updatetask = task.map((currtask) =>{
        if(currtask.content === value){
            return {...currtask, checked : !currtask.checked}
        } else{
            return currtask;
        }
    })
    setTask(updatetask)
}




return (
        <section className={styles.todoContainer}>
    <header className={styles.headr}>
        <h1>TODO APPLICATION</h1>
        <DateTime />
    </header>

    <Form 
        inputval={inputval.content}
        handleInputValue={handleInputValue}
        handleSubmit={handleSubmit}
    />

    {/* ✅ FIXED SCROLL SECTION */}
    <div className={styles.listWrapper}>
        
        <div className={styles.scrollArea}>
            <ul>
                {task.map((curr) => (
                    <Task 
                        key={curr.id}
                        data={curr}
                        handleDeleteFunc={handleDeleteFunc}
                        handleontick={handleontick}
                    />
                ))}
            </ul>
        </div>

        <button className={styles.clearBtn} onClick={handleDel}>
            CLEAR ALL
        </button>
    </div>
</section>

    )
}