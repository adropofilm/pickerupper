import styles from "./styles.module.css"
import FindSection from "./findSection"
import LearnMore from "./learnMore"
import HowTo from "./howTo"
import Featured from "./featured"
import Join from "./join"
import GetStarted from "./getStarted"

const Home = () => {
    return (
        <div id={styles["home-container"]}>
            <FindSection />
            <div id={styles["gray-bg"]}>
                <LearnMore />
                <HowTo />
                <Featured />
                <Join />
                <GetStarted />
            </div>
        </div>
    )
}

export default Home;