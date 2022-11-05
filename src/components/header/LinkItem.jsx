import { Link } from "react-router-dom";

const LinkItem = ({path, linkText}) => {
    return (
        <li>
            <Link to={path}>{linkText}</Link>
        </li>
    )
}

export default LinkItem;