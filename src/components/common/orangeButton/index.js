import styles from "./styles.module.css"

const OrangeButton = ({text}) => {
    return (
        <button type="button" className={styles.button}>{text}</button>
    )
}

export default OrangeButton;