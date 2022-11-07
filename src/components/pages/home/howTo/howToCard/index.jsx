import CircleWithNum from "../../../../common/circleWithNum";
import styles from "./styles.module.css"
 
const HowToCard = ({number, title, text}) => {
    return (
        <div id={styles["how-to-card"]}>
            <CircleWithNum />
            <p>{title}</p>
            <p>{text}</p>
        </div>
    )
}

export default HowToCard;