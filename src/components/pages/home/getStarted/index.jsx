import OrangeButton from "../../../common/orangeButton";
import styles from "./styles.module.css"

const GetStarted = () => {
    return (
        <div id={styles["get-started"]}>
            <div id={styles["get-started-container"]}>
                <h2 id={styles.header} className="blue-header-txt">Find local pickerupper <br /> near you.</h2>
                <p className="poppins">Busy with work? That’s why we’re here. Find local available <br />
                    pickeruppers near you to help you get your projects done. <br />
                    Post your pickups and your prince and let us do the rest. Get <br />
                    started with a free account today.       </p>
                <OrangeButton text="Get Started"/>
            </div>
        </div>
    )
}

export default GetStarted;