import img from "../../../../../assets/illustration2.png"
import styles from "./styles.module.css"
import OrangeButton from "../../../../common/orangeButton"

const FindPickerUpper = () => {
    return ( 
        <div id={[styles["find-picker-upper"]]}>
            <p id={styles.header} className="poppins-bold">Find a PickerUpper</p>
            <p className="poppins">Get more done easier. Find persons <br />
                in your area who are ready to <br />
                help you with your tasks.
            </p>
            <OrangeButton text="Sign Up"/>
            <img src={img} alt="Woman standing next to phone" />
        </div>
    )
}

export default FindPickerUpper;