import logo from "./logo.svg"
import NavLinks from "./navLinks";
import OrangeButton from "../orangeButton"
import styles from "./styles.module.css"

const HeaderContainer = () => {
    return (
      <div id={styles["header-container"]}>
        <img src={logo} alt="BigCo Inc. logo"/>
        <NavLinks />
        <div id={styles["nav-button-container"]}>
          <OrangeButton text="Login"/>
          <OrangeButton text="Sign Up"/>
        </div>
      </div>
    )
}

export default HeaderContainer;