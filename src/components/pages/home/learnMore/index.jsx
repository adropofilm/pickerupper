import styles from "./styles.module.css"
import imageOne from "./passing_box.png"
import imageTwo from "./workers_faces.png"
import OrangeButton from "../../../common/orangeButton"

const LearnMore = () => {
    return (
        <div id={styles["learn-more"]}>
            <div id={styles["learn-more-image-container"]}>
                <img 
                    src={imageOne}
                    alt="Worker passing customer a box"
                    className={styles["find-section-img"]} />
                <img 
                    src={imageTwo}
                    alt="Workers moving boxes around"
                    className={styles["find-section-img"]} />
            </div>
            <div id={styles["learn-more-text"]}>
                <h2 className="blue-header-txt">Let us handle it.</h2>
                <p>Need help with that project? Relax! We’ll take <br />
                    it from here. Connect with local professionals <br />
                    in your area to see how they can assist you. <br />
                    We find persons for you to help you make your <br />
                    day easier. </p>
                <p>Don’t worry about hiring expensive help and <br />
                    going broke. Set your price. Its reliable help <br />
                    you can afford, all without breaking a sweat <br />
                    or leaving the comfort of your home. Its help <br />
                    the way you want it.</p>
                <OrangeButton text="Learn More"/>
            </div>
        </div>
    )
}

export default LearnMore;