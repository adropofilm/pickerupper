import OrangeButton from "../../../common/orangeButton";
import backgroundImg from "./backgroundImage.png"
import styles from "./styles.module.css"

const FindSection = () => {
    return (
        <div id={styles["find-section"]}>
            <img 
                src={backgroundImg}
                alt="Man smiling with work uniform on"
                id={styles["find-section-img"]} />
            <div id={styles["find-section-txt"]} className="flex-column">
                <h1 id={styles.header}>Find a picker <br/> upper near <br/> you.</h1>
                <p>PickerUpper is a platform that connects local <br />
                    residents with workers in their area. Sign up as <br />
                    a pickerupper to offer professional services to <br />
                    nearby residents.</p>
                <OrangeButton text="Become a PickerUpper"/>
            </div>
        </div>
    )
}

export default FindSection;