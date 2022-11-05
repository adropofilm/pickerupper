import LinkItem from "./LinkItem";

const NavLinks = () => {
    return (
        <nav>
          <ul>
            <LinkItem path="/" linkText="Home" />
            <LinkItem path="find-picker-upper" linkText="Find Picker Upper" />
            <LinkItem path="services" linkText="Services" />
            <LinkItem path="about" linkText="About" />
          </ul>
        </nav>
    )
}

export default NavLinks;