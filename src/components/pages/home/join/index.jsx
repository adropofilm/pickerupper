import BecomePickerUpper from "./becomePickerUpper"
import FindPickerUpper from "./findPickerUpper";
import styles from "./styles.module.css" 

const Join = () => {
    return ( 
        <div id={[styles.join]}>
            <h2 id={styles.header} class="blue-header-txt">Join the family.</h2>
            <div id={styles["join-picker-upper-container"]}>
                <BecomePickerUpper />
                <div id={styles["join-divider"]} />
                <FindPickerUpper />
            </div>
        </div>
    )
}

export default Join;