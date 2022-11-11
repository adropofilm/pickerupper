import img from "../../../../../assets/illustration1.png"
import styles from "./styles.module.css"
import OrangeButton from "../../../../common/orangeButton"

const BecomePickerUpper = () => {
    return ( 
        <div id={[styles["become-picker-upper"]]}>
            <img src={img} alt="Woman holding a box" />
            <p id={styles.header} className="poppins-bold">Become a PickerUpper</p>
            <p className="poppins">Create your account and begin <br />
                growing your business and <br />
                start earning money. <br />
            </p>
            <OrangeButton text="Become a PickerUpper"/>
        </div>
    )
}

export default BecomePickerUpper;