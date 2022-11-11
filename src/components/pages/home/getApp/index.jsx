import styles from "./styles.module.css"
import iphoneImg from "../../../../assets/flying_iphone.png"
import appStoreImg from "../../../../assets/app_store.png"

const GetApp = () => {
    return (
        <div id={styles["get-app"]}>
            <div id={styles["get-app-text"]}>
                <h2 className="blue-header-txt">Get the app.</h2>
                <p className="poppins">We’re making it easier for you. Help right at <br />
                    your fingertips. Make and manage your <br />
                    pickups on the go, right from your mobile <br /> 
                    decives. Download the PickerUpper <br />
                    app from the app store and the google <br />
                    playstore today. </p>
                <img src={appStoreImg} alt="Download from appstore icons" id={styles["app-store-img"]}/>
            </div>
            <img src={iphoneImg} alt="floating iphone with PickerUpper app" id={styles["get-app-img"]} />
        </div>
    )
}

export default GetApp;