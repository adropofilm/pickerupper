import { Link } from "react-router-dom";
import styles from "./styles.module.css"

const LinkItem = ({path, linkText}) => {
    return (
        <Link to={path} className={styles.link}>{linkText}</Link>
    )
}

export default LinkItem;