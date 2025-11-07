import styles from "./toggle.module.css";
import { useState } from "react";


export const Toggle = () =>{


    const [isOn, switchonoff] = useState(false)

    const handleToggleSwitch = () =>{
        switchonoff(!isOn);
    }
    const bgcolor = {backgroundColor: isOn ? "green" : "red" }
    const content = isOn ? "ON":"OFF"
    return (
        <>
            <div className={styles['toggle-switch']} onClick={handleToggleSwitch} style={bgcolor}>
                <div className={`${styles.switch} ${isOn ? styles.on : styles.off}`}>
                    <span className={styles['switch-state']}>
                        {content}
                    </span>
                </div>
            </div>
        </>
    )
}