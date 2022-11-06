import LinkItem from "../linkItem";
import styles from "./styles.module.css"

const NavLinks = () => {
    return (
        <nav id={styles["nav-links"]}>
          <LinkItem path="/" linkText="Home" />
          <LinkItem path="find-picker-upper" linkText="Find Picker Upper" />
          <LinkItem path="services" linkText="Services" />
          <LinkItem path="about" linkText="About" />
        </nav>
    )
}

export default NavLinks;