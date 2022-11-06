import logo from "./logo.svg"
import NavLinks from "../navLinks";

import styles from "./styles.module.css"

const HeaderContainer = () => {
    return (
      <div id={styles["header-container"]}>
        <img src={logo} alt="BigCo Inc. logo"/>
        <NavLinks />
        <div id={styles["nav-button-container"]}>
          <button type="button">Login</button>
          <button type="button">Sign Up</button>
        </div>
      </div>
    )
}

export default HeaderContainer;