import HowToCard from "./howToCard"
import styles from "./styles.module.css"

const HowTo = () => {
    return (
        <div id={styles["how-to"]}>
            <h2 className="blue-header-txt">Quick. Reliable. Easy.</h2>
            <HowToCard 
                className={styles["how-to-card"]}
                number="1" 
                title="Choose" 
                text="Select persons from our <br />
                vetted lists of pickeruppers <br />
                to help you with that project <br />
                you need taken care of." />
            <HowToCard 
                className={styles["how-to-card"]}
                number="2" 
                title="Talk" 
                text="Message your pickerupper <br />
                and discuss the details of <br />
                your task. Set your delivery <br />
                place and schedule." />
            <HowToCard 
                className={styles["how-to-card"]}
                number="3" 
                title="Pay" 
                text="Pay for services and skills <br />
                through our secure <br />
                and private platform." />
        </div>
    )
}

export default HowTo;