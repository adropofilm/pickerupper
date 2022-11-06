import styles from "./styles.module.css"
import FindSection from "../findSection"

const Home = () => {
    return (
        <div id={styles["home-container"]}>
            <FindSection />
        </div>
    )
}

export default Home;