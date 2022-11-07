import styles from "./styles.module.css"
import FindSection from "./findSection"
import LearnMore from "./learnMore"
import HowTo from "./howTo"

const Home = () => {
    return (
        <div id={styles["home-container"]}>
            <FindSection />
            <div id={styles["gray-bg"]}>
                <LearnMore />
                <HowTo />
            </div>
        </div>
    )
}

export default Home;