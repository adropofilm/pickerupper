import CircleWithNum from "../../../../common/circleWithNum";
import styles from "./styles.module.css"
 
const HowToCard = ({number, title, text}) => {
    return (
        <div className={styles["how-to-card"]}>
            <CircleWithNum dimension="100" fill="#353531" number={number} />
            <p className={styles["card-title"]}>{title}</p>
            <p className={styles["card-text"]} dangerouslySetInnerHTML={{ __html: text }} />
        </div>
    )
}

export default HowToCard;