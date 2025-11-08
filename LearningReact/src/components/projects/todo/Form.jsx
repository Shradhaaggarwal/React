import styles from "./todo.module.css"

export const Form = ({handleInputValue, inputval, handleSubmit}) =>{
    return (
        <form className={styles.formm} onSubmit={handleSubmit}>
                            
            <input type="text" name="task" id="task" 
                className={styles.task} 
                placeholder="ENTER YOUR TASK HERE" 
                value={inputval} 
                onChange={(e) => handleInputValue(e.target.value)}/>
                            
                <button className={styles.but} type="submit">ADD</button>
                            
        </form>
    )
}