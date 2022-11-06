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
                <h1 id={styles.header}>Find a Picker Upper Near You</h1>
            </div>
        </div>
    )
}

export default FindSection;